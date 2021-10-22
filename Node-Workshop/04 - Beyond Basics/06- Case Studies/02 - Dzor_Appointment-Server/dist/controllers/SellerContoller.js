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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const db = __importStar(require("../db"));
//ToDo : Confirm Appointment
//ToDo : Get Appointment List
//ToDo : Missed Appointment
// Get Seller Apointments List.
exports.getAppointmentList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let appointments = yield db.getSellerAppointments();
    res.status(200).send(appointments);
});
// Update Appointment Status to Pending || Confirm || Cancel.
exports.updateAppointmentStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(req.body.id || req.body.status)) {
        throw new Error("parameter id and status are required");
    }
    let id = req.body.id;
    let data = {
        status: req.body.status,
    };
    if (req.body.message) {
        data.message = req.body.message;
    }
    yield db.updateAppointment(id, data);
    res.status(200).send();
});
// Update Appointment Status to Missed.
exports.updateAppointmentToMissed = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(req.body.id || req.body.status)) {
        throw new Error("parameter id and status are required");
    }
    let id = req.body.id;
    let status = req.body.status;
    if (status != 4 /* MISSED */) {
        throw new Error("Status is Invalid");
    }
    let response = yield db.getAppointmentById(id);
    let appointmentModel = AppointmentModelMapping(response);
    if (appointmentModel) {
        let checkTimeDifference = (new Date().getTime() / 1000) - (appointmentModel.timeSlotEnd.getTime() / 1000) > 60;
        if (checkTimeDifference && appointmentModel.status != 3 /* COMPLETED */) {
            throw new Error("You can mark missed after an hour!");
        }
        let data = { status };
        yield db.updateAppointment(id, data);
        res.status(200).send();
    }
});
// Mapping Json Data to Appointment Model.
function AppointmentModelMapping(data) {
    return {
        sellerId: data.sellerId,
        userId: data.userId,
        status: data.status,
        timeSlotStart: new Date(data.timeSlotStart),
        timeSlotEnd: new Date(data.timeSlotEnd),
        message: data.message
    };
}
//# sourceMappingURL=SellerContoller.js.map