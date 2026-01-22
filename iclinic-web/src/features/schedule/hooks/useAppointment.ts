"use client";

import { useQuery } from "@tanstack/react-query";
import { AppointmentsService } from "../services/appointments.service";
import { useAuth } from "@/features/shared/context/AuthContext";

export function useAppointments() {
  const { user } = useAuth();

  const query = useQuery({
    queryKey: ["appointments"],
    queryFn: AppointmentsService.list,
    enabled: !!user,
  });

  function getVisibleAppointments() {
    if (!query.data || !user) return [];

    if (user.role === "admin") return query.data;

    if (user.role === "doctor") {
      return query.data.filter(a => a.doctor === user.name);
    }

    if (user.role === "patient") {
      return query.data.filter(a => a.patient === user.name);
    }

    return [];
  }

  return {
    appointments: getVisibleAppointments(),
    isLoading: query.isLoading,
  };
}
