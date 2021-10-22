"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
require('express-async-errors');
const userRouter = express.Router();
const sellerRouter = express.Router();
//Controllers
const userController = __importStar(require("./controllers/UserContoller"));
const sellerController = __importStar(require("./controllers/SellerContoller"));
//ToDo Add user Routes
userRouter.post('/book_appointment', userController.bookAppointmentList);
userRouter.get('/get_appointment_list', userController.getAppointmentList);
userRouter.get('/cancel_appointment', userController.cancelAppointment);
userRouter.get('/get_available_appointment_slot', userController.availableAppointmentSlot);
//ToDo Add seller routes
sellerRouter.get('/get_appointments', sellerController.getAppointmentList);
sellerRouter.post('/set_appointment_status', sellerController.updateAppointmentStatus);
sellerRouter.post('/set_missed_appointment', sellerController.updateAppointmentToMissed);
exports.default = {
    userRouter,
    sellerRouter
};
//# sourceMappingURL=routes.js.map