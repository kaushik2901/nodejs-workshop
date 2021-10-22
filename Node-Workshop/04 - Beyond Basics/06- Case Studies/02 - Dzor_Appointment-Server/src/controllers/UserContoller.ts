"use strict";
import { Response, Request } from "express";
import { getUserBookedAppointment, bookAppointment, updateCompletedAppointment, getUserAllAppointment, getUserAppointment, updateUserAppointment, getSellerBusySlot, getSellerTimeSlot} from '../db';
import moment from "moment";

//ToDo : Add to Docs & test

export const getAppointmentList = async (req:Request,res:Response) => {
    
    let userId = "1234";
    let page = req.query.page || 0;
    let limit = req.query.limit || 10;
    let skip = page*limit;

    let update = await updateCompletedAppointment();


    let appointmentList = await getUserAllAppointment(userId,skip,limit);
    console.log(appointmentList);
    res.json(appointmentList);
}
export const bookAppointmentList = async (req: Request, res: Response) => {
    
    const userId = "1234";
    const sellerId = req.body.sellerId || "";
    const timeSlotStart = req.body.timeSlotStart || "";
    const timeSlotEnd = req.body.timeSlotEnd || "";

    if(!(sellerId && timeSlotEnd && timeSlotStart)) {
        throw Error("Parameters are missing")
    }

    const bookedAppointmentData = await getUserBookedAppointment(userId,timeSlotStart);
    
    if (bookedAppointmentData && bookedAppointmentData.length!=0){
        throw Error("You Already have an appointment that day");
    }

    let appointment:Appointment = {
        userId :userId,
        sellerId :sellerId,
        status:AppointmentStatus.PENDING,
        timeSlotStart:timeSlotStart,
        timeSlotEnd:timeSlotEnd,
    }
    
    let savedAppointment = await bookAppointment(appointment);

    return res.status(200).send("Appointment book successfully");
}

export const cancelAppointment = async (req:Request,res:Response) => {

    const userId = "1234";
    const appointmentId = req.body.appointmentId || "";

    if(!appointmentId) {
        throw Error("Parameters are missing")
    }

    let data = await getUserAppointment(userId,appointmentId);
    
    if(data && data.length == 0){
        throw Error("Appointment is not found");
    }
    
    let time = moment().subtract(1,'day').toDate();
    
    if(data[0].status == AppointmentStatus.CANCELLED){
        throw Error("Appointment is already cancelled");
    }
    if (data[0].status == AppointmentStatus.COMPLETED) {
        throw Error("Appointment is Completed.");
    }
    if (data[0].timeSlotStart > time) {
        throw Error("You can only cancel appointments before 24 hours of Scheduled Time")
    }

    let cancel = await updateUserAppointment(userId,appointmentId);

    if (cancel && cancel.length == 0) {
        throw Error("ERROR");
    }
    return res.status(200).send("Cancel Appointment Successfully")
}


export const availableAppointmentSlot = async (req: Request, res: Response) => {

    let sellerId = req.query.sellerId || "12116617";
    let day = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday","saturday"];

    if(!sellerId) {
        throw Error("Parameters are missing");
    }
    
    Promise.all([getSellerBusySlot(sellerId), getSellerTimeSlot(sellerId)]).then((values) => {
        const sellerBusySlot = values[0];
        const sellerTimeSlot = values[1];

        const dayOfWeek = moment().day();
        let timeSlot = [];

        for (let i = dayOfWeek; i <= (dayOfWeek + 2); i++) {
            timeSlot.push(sellerTimeSlot[0].accountTiming[day[i]])
        }

        let resp = {
            sellerTimeSlot: timeSlot,
            sellerBusySlot: sellerBusySlot
        }

        return res.json(resp);
    });
}