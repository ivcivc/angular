export declare class Appointment {
    Text: string;
    OwnerId: number[];
    StartDate: Date;
    EndDate: Date;
}
export declare class AppointmentService {
    getAppointments(): Appointment[];
}
