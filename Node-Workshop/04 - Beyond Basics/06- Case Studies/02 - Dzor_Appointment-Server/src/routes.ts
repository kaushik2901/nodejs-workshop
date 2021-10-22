const express = require('express');
require('express-async-errors');
const userRouter = express.Router();
const sellerRouter = express.Router();

//Controllers
import * as userController from "./controllers/UserContoller";
import * as sellerController from "./controllers/SellerContoller";

//ToDo Add user Routes
userRouter.post('/book_appointment', userController.bookAppointmentList);
userRouter.get('/get_appointment_list', userController.getAppointmentList);
userRouter.get('/cancel_appointment', userController.cancelAppointment);
userRouter.get('/get_available_appointment_slot', userController.availableAppointmentSlot);
//ToDo Add seller routes
sellerRouter.get('/get_appointments', sellerController.getAppointmentList);
sellerRouter.post('/set_appointment_status', sellerController.updateAppointmentStatus);
sellerRouter.post('/set_missed_appointment', sellerController.updateAppointmentToMissed);

export default {
    userRouter,
    sellerRouter
};