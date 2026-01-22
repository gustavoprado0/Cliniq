"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AppointmentsService } from "../services/appointments.service";
import { Appointment } from "../types/appointment";

export function useCreateAppointment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (appointment: Appointment) =>
      AppointmentsService.create(appointment),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["appointments"],
      });
    },
  });
}
