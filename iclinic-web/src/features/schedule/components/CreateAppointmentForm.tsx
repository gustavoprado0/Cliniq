"use client";

import { useAuth } from "@/features/shared/context/AuthContext";
import { useCreateAppointment } from "../hooks/useCreateAppointments";
import { useState } from "react";
import { Input } from "@/features/shared/ui/input";
import { Button } from "@/features/shared/ui/button";

export function CreateAppointmentForm() {
  const { user } = useAuth();
  const { mutate, isPending } = useCreateAppointment();
  const [doctor, setDoctor] = useState("");
  const [specialty, setSpecialty] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!user) return;

    mutate({
      id: crypto.randomUUID(),
      patient: user.name,
      doctor,
      specialty,
      status: "Disponível",
    });

    setDoctor("");
    setSpecialty("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Agendar consulta</h3>

      <Input
        value={doctor}
        onChange={e => setDoctor(e.target.value)}
        placeholder="Médico"
      />

      <Input
        value={specialty}
        onChange={e => setSpecialty(e.target.value)}
        placeholder="Especialidade"
      />

      <Button disabled={isPending}>
        {isPending ? "Agendando..." : "Agendar"}
      </Button>
    </form>
  );
}
