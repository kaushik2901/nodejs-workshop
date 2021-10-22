"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const arangojs_1 = require("arangojs");
const host = process.env.DBHost || '13.234.165.255';
const port = process.env.DBPort || '8529';
const username = process.env.DBUser || "root";
const password = process.env.DBPassword || "arango@123";
const dbName = process.env.DBName || 'DZOR';
const db = new arangojs_1.Database({
    url: `http://${host}:${port}`,
});
function setup() {
    db.useDatabase(dbName);
    db.useBasicAuth(username, password);
    db.listCollections().then(function (res) {
        res.forEach((coll, i) => {
            console.log(`${i + 1}. ${coll.name} (ID=${coll.id}, system=${coll.isSystem})`);
        });
    }, function (err) {
        const res = err;
        console.log(`Error ${res}`);
    });
    return db;
}
exports.setup = setup;
function getSellerAppointments() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield db.query(arangojs_1.aql `
        FOR app IN Appointment 
        FILTER app.sellerId == "12116617"
        FOR user IN users
        FILTER user._id == app.userId
        RETURN {
        "name": user.name,
        "appointmentId": app._id,
        "timeSlotStart":app.timeSlotStart,
        "timeSlotEnd":app.timeSlotEnd,
        "status":app.status}
    `);
        return res.all();
    });
}
exports.getSellerAppointments = getSellerAppointments;
function getAppointmentById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const appointment = db.collection("Appointment");
        return yield appointment.document(id);
    });
}
exports.getAppointmentById = getAppointmentById;
function updateAppointment(id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const appointment = db.collection("Appointment");
        yield appointment.update({ "_id": id }, data);
    });
}
exports.updateAppointment = updateAppointment;
function userAppointment() {
    return __awaiter(this, void 0, void 0, function* () {
        const appointment = db.collection("Appointment");
        let time = new Date();
        let newA = {
            userId: "users/10163508",
            message: "Hello Test222",
            status: 0 /* PENDING */,
            timeSlotStart: time,
            timeSlotEnd: time,
            sellerId: "test"
        };
        yield appointment.save(newA);
    });
}
exports.userAppointment = userAppointment;
function getUserBookedAppointment(userId, date) {
    return __awaiter(this, void 0, void 0, function* () {
        let query = `FOR c IN Appointment FILTER c.userId == "${userId}"
                    FILTER DATE_COMPARE(DATE_ISO8601("${date}"),c.timeSlotStart, "month", "day") 
                    FILTER c.status IN [${0 /* PENDING */},${1 /* CONFIRMED */}]
                    return c`;
        console.log(query);
        const res = yield db.query(query);
        return res.all();
    });
}
exports.getUserBookedAppointment = getUserBookedAppointment;
function bookAppointment(appointment) {
    return __awaiter(this, void 0, void 0, function* () {
        const appointmentDB = db.collection("Appointment");
        return appointmentDB.save(appointment);
    });
}
exports.bookAppointment = bookAppointment;
function updateCompletedAppointment() {
    let query = `FOR c IN Appointment 
                    FILTER DATE_TIMESTAMP(c.timeSlotEnd) <= DATE_NOW() 
                    UPDATE c WITH { status: 3 } IN Appointment 
                    return { new: NEW }`;
    return db.query(query);
}
exports.updateCompletedAppointment = updateCompletedAppointment;
function getUserAllAppointment(userId, skip, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let query = `FOR appointment IN Appointments
                FILTER appointment.userId == "${userId}"
                SORT appointment.timeSlotStart
                LIMIT ${skip},${limit} 
                FOR seller IN accounts FILTER seller.owner._key == appointment.sellerId 
                RETURN { appointment, seller: seller.owner }`;
        const res = yield db.query(query);
        return res.all();
    });
}
exports.getUserAllAppointment = getUserAllAppointment;
function getUserAppointment(userId, appointmentId) {
    return __awaiter(this, void 0, void 0, function* () {
        let query = `FOR appointment IN Appointment
                    FILTER appointment._key == "${appointmentId}" 
                    FILTER appointment.userId == "${userId}"
                    RETURN appointment`;
        const res = yield db.query(query);
        return res.all();
    });
}
exports.getUserAppointment = getUserAppointment;
function updateUserAppointment(userId, appointmentId) {
    return __awaiter(this, void 0, void 0, function* () {
        let query = `FOR appointment IN Appointment
                    FILTER appointment._key == "${appointmentId}" 
                    FILTER appointment.userId == "${userId}"
                    UPDATE appointment WITH { status: ${2 /* CANCELLED */} } IN Appointment
                    RETURN { NEW }`;
        const res = yield db.query(query);
        return res.all();
    });
}
exports.updateUserAppointment = updateUserAppointment;
function getSellerBusySlot(sellerId) {
    return __awaiter(this, void 0, void 0, function* () {
        let query = `FOR appointment IN Appointment
                    FILTER appointment.sellerId == "${sellerId}"
                    FILTER appointment.status IN [0,1]
                    FILTER DATE_NOW() < DATE_TIMESTAMP(appointment.timeSlotStart)
                    return {[appointment.timeSlotStart]:appointment}`;
        const res = yield db.query(query);
        return res.all();
    });
}
exports.getSellerBusySlot = getSellerBusySlot;
function getSellerTimeSlot(sellerId) {
    return __awaiter(this, void 0, void 0, function* () {
        let query = `FOR account IN accounts
                    FILTER account.owner._key == "${sellerId}"
                    return { accountTiming: account.timing }`;
        const res = yield db.query(query);
        return res.all();
    });
}
exports.getSellerTimeSlot = getSellerTimeSlot;
//# sourceMappingURL=db.js.map