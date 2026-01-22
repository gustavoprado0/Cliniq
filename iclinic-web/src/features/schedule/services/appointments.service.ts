import { Appointment } from "../types/appointment";
import {
  getAppointments,
  createAppointment,
} from "../mocks/appointments.store";

export const AppointmentsService = {
  list: async (): Promise<Appointment[]> => {
    await new Promise(r => setTimeout(r, 500)); // simula API
    return getAppointments();
  },

  create: async (appointment: Appointment) => {
    await new Promise(r => setTimeout(r, 500));
    createAppointment(appointment);
  },
};
