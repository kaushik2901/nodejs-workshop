
import { Database, aql } from "arangojs";

const host = process.env.DBHost || '13.234.165.255'
const port = process.env.DBPort || '8529'
const username = process.env.DBUser || "root"
const password = process.env.DBPassword || "arango@123"
const dbName = process.env.DBName || 'DZOR'

const db = new Database({
    url: `http://${host}:${port}`,
});

export function setup() {

    db.useDatabase(dbName);
    db.useBasicAuth(username, password);
    db.listCollections().then(function (res) {
        res.forEach((coll: any, i) => {
            console.log(`${i + 1}. ${coll.name} (ID=${coll.id}, system=${coll.isSystem})`)
        });
    }, function (err) {
        const res = err
        console.log(`Error ${res}`);
    });
    return db;
}

export async function getSellerAppointments() {
    const res = await db.query(aql`
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
}

export async function getAppointmentById(id: string) {
    const appointment = db.collection("Appointment");
    return await appointment.document(id);
}

export async function updateAppointment(id: string, data: any) {
    const appointment = db.collection("Appointment");
    await appointment.update({ "_id": id }, data);
}

export async function userAppointment() {
    const appointment = db.collection("Appointment");
    let time = new Date();
    let newA: Appointment = {
        userId: "users/10163508",
        message: "Hello Test222",
        status: AppointmentStatus.PENDING,
        timeSlotStart: time,
        timeSlotEnd: time,
        sellerId: "test"
    }
    await appointment.save(newA);
}

export async function getUserBookedAppointment(userId: string,date:Date){

    let query = `FOR c IN Appointment FILTER c.userId == "${userId}"
                    FILTER DATE_COMPARE(DATE_ISO8601("${date}"),c.timeSlotStart, "month", "day") 
                    FILTER c.status IN [${AppointmentStatus.PENDING},${AppointmentStatus.CONFIRMED}]
                    return c`
    
    console.log(query)
    const res = await db.query(query);
    return res.all();
}

export async function bookAppointment(appointment:Appointment) {

    const appointmentDB = db.collection("Appointment");
    return appointmentDB.save(appointment);
}


export function updateCompletedAppointment() {

    let query = `FOR c IN Appointment 
                    FILTER DATE_TIMESTAMP(c.timeSlotEnd) <= DATE_NOW() 
                    UPDATE c WITH { status: 3 } IN Appointment 
                    return { new: NEW }`
    
    return db.query(query);
}

export async function getUserAllAppointment(userId: string,skip:number,limit:number) {
    let query = `FOR appointment IN Appointments
                FILTER appointment.userId == "${userId}"
                SORT appointment.timeSlotStart
                LIMIT ${skip},${limit} 
                FOR seller IN accounts FILTER seller.owner._key == appointment.sellerId 
                RETURN { appointment, seller: seller.owner }`;

    const res = await db.query(query);
    return res.all();
}

export async function getUserAppointment(userId: string,appointmentId:string) {

    let query = `FOR appointment IN Appointment
                    FILTER appointment._key == "${appointmentId}" 
                    FILTER appointment.userId == "${userId}"
                    RETURN appointment`;

    const res = await db.query(query);
    return res.all();
}

export async function updateUserAppointment(userId: string, appointmentId: string) {

    let query = `FOR appointment IN Appointment
                    FILTER appointment._key == "${appointmentId}" 
                    FILTER appointment.userId == "${userId}"
                    UPDATE appointment WITH { status: ${AppointmentStatus.CANCELLED} } IN Appointment
                    RETURN { NEW }`;

    const res = await db.query(query);
    return res.all();
}

export async function getSellerBusySlot(sellerId:string){

    let query = `FOR appointment IN Appointment
                    FILTER appointment.sellerId == "${sellerId}"
                    FILTER appointment.status IN [0,1]
                    FILTER DATE_NOW() < DATE_TIMESTAMP(appointment.timeSlotStart)
                    return {[appointment.timeSlotStart]:appointment}`

    const res = await db.query(query);
    return res.all();
}

export async function getSellerTimeSlot (sellerId:string) {
    let query = `FOR account IN accounts
                    FILTER account.owner._key == "${sellerId}"
                    return { accountTiming: account.timing }`

    const res = await db.query(query);
    return res.all();
}