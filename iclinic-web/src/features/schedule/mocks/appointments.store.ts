import { Appointment } from "../types/appointment";

let appointments: Appointment[] = [
  {
    id: "1",
    patient: "João",
    doctor: "Dra. Gustavo Costa",
    specialty: "Neurologia",
    status: "Indisponível",
  },
];

export function getAppointments() {
  return appointments;
}

export function createAppointment(appointment: Appointment) {
  appointments = [...appointments, appointment];
}
