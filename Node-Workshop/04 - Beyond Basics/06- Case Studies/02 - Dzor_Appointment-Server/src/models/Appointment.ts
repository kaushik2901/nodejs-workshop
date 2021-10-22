interface Appointment {
  userId: string; //Index this
  sellerId: string;  //Index this
  timeSlotStart: Date;
  timeSlotEnd: Date;
  status: AppointmentStatus;
  message?: string;
}

const enum AppointmentStatus {
  PENDING,
  CONFIRMED,
  CANCELLED,
  COMPLETED,
  MISSED
}
