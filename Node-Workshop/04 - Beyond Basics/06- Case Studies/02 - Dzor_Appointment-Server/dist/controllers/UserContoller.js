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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
const moment_1 = __importDefault(require("moment"));
//ToDo : Add to Docs & test
exports.getAppointmentList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let userId = "1234";
    let page = req.query.page || 0;
    let limit = req.query.limit || 10;
    let skip = page * limit;
    let update = yield db_1.updateCompletedAppointment();
    let appointmentList = yield db_1.getUserAllAppointment(userId, skip, limit);
    console.log(appointmentList);
    res.json(appointmentList);
});
exports.bookAppointmentList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = "1234";
    const sellerId = req.body.sellerId || "";
    const timeSlotStart = req.body.timeSlotStart || "";
    const timeSlotEnd = req.body.timeSlotEnd || "";
    if (!(sellerId && timeSlotEnd && timeSlotStart)) {
        throw Error("Parameters are missing");
    }
    const bookedAppointmentData = yield db_1.getUserBookedAppointment(userId, timeSlotStart);
    if (bookedAppointmentData && bookedAppointmentData.length != 0) {
        throw Error("You Already have an appointment that day");
    }
    let appointment = {
        userId: userId,
        sellerId: sellerId,
        status: 0 /* PENDING */,
        timeSlotStart: timeSlotStart,
        timeSlotEnd: timeSlotEnd,
    };
    let savedAppointment = yield db_1.bookAppointment(appointment);
    return res.status(200).send("Appointment book successfully");
});
exports.cancelAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = "1234";
    const appointmentId = req.body.appointmentId || "";
    if (!appointmentId) {
        throw Error("Parameters are missing");
    }
    let data = yield db_1.getUserAppointment(userId, appointmentId);
    if (data && data.length == 0) {
        throw Error("Appointment is not found");
    }
    let time = moment_1.default().subtract(1, 'day').toDate();
    if (data[0].status == 2 /* CANCELLED */) {
        throw Error("Appointment is already cancelled");
    }
    if (data[0].status == 3 /* COMPLETED */) {
        throw Error("Appointment is Completed.");
    }
    if (data[0].timeSlotStart > time) {
        throw Error("You can only cancel appointments before 24 hours of Scheduled Time");
    }
    let cancel = yield db_1.updateUserAppointment(userId, appointmentId);
    if (cancel && cancel.length == 0) {
        throw Error("ERROR");
    }
    return res.status(200).send("Cancel Appointment Successfully");
});
exports.availableAppointmentSlot = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let sellerId = req.query.sellerId || "12116617";
    let day = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    if (!sellerId) {
        throw Error("Parameters are missing");
    }
    Promise.all([db_1.getSellerBusySlot(sellerId), db_1.getSellerTimeSlot(sellerId)]).then((values) => {
        const sellerBusySlot = values[0];
        const sellerTimeSlot = values[1];
        const dayOfWeek = moment_1.default().day();
        let timeSlot = [];
        for (let i = dayOfWeek; i <= (dayOfWeek + 2); i++) {
            timeSlot.push(sellerTimeSlot[0].accountTiming[day[i]]);
        }
        let resp = {
            sellerTimeSlot: timeSlot,
            sellerBusySlot: sellerBusySlot
        };
        return res.json(resp);
    });
});
//# sourceMappingURL=UserContoller.js.map