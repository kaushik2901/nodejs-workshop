"use strict";
import { Response, Request, NextFunction } from "express";
import * as db from "../db";
import logger from "../util/logger";

//ToDo : Confirm Appointment
//ToDo : Get Appointment List
//ToDo : Missed Appointment

// Get Seller Apointments List.
export const getAppointmentList = async (req: Request, res: Response) => {
    let appointments = await db.getSellerAppointments();
    res.status(200).send(appointments);
};

// Update Appointment Status to Pending || Confirm || Cancel.
export const updateAppointmentStatus = async (req: Request, res: Response) => {
        if (!(req.body.id || req.body.status)) {
            throw new Error("parameter id and status are required")
        }
        let id = req.body.id;
        let data: any = {
            status: req.body.status,
        };
        if (req.body.message) {
            data.message = req.body.message;
        }
        await db.updateAppointment(id, data)
        res.status(200).send();
};

// Update Appointment Status to Missed.
export const updateAppointmentToMissed = async (req: Request, res: Response) => {
    if (!(req.body.id || req.body.status)) {
        throw new Error("parameter id and status are required");
    }
    let id = req.body.id;
    let status = req.body.status;
    if (status != AppointmentStatus.MISSED) {
        throw new Error("Status is Invalid");
    }
    let response = await db.getAppointmentById(id);
    let appointmentModel = AppointmentModelMapping(response);
    if (appointmentModel) {
        let checkTimeDifference = (new Date().getTime() / 1000) - (appointmentModel.timeSlotEnd.getTime() / 1000) > 60;
        if (checkTimeDifference && appointmentModel.status != AppointmentStatus.COMPLETED) {
            throw new Error("You can mark missed after an hour!");
        }
        let data = { status }
        await db.updateAppointment(id, data);
        res.status(200).send();
    }
};

// Mapping Json Data to Appointment Model.
function AppointmentModelMapping(data: any): Appointment {
    return {
        sellerId: data.sellerId,
        userId: data.userId,
        status: data.status,
        timeSlotStart: new Date(data.timeSlotStart),
        timeSlotEnd: new Date(data.timeSlotEnd),
        message: data.message
    }
}
