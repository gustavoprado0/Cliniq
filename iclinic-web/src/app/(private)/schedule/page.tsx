'use client'

import { CreateAppointmentForm } from "@/features/schedule/components/CreateAppointmentForm";
import { useAppointments } from "@/features/schedule/hooks/useAppointment";
import { useAuth } from "@/features/shared/context/AuthContext";
import { Card, CardContent } from "@/features/shared/ui/card";
import { Label } from "@/features/shared/ui/label";

export default function SchedulePage() {
    const { user } = useAuth();
    const { appointments } = useAppointments();

    if (!user) return null;
    return (
        <>
            <div className="space-y-4">
                <p>
                    Logado como: {user.name} ({user.role})
                </p>

                {user.role === "patient" && <CreateAppointmentForm />}

                <h2>Consultas agendadas</h2>

                <div className="flex items-center gap-3">
                    {appointments.map(appointment => (
                        <Card className="w-full" key={appointment.id}>
                            <CardContent className="space-y-4">
                                <div className="flex justify-between">
                                    <Label>Paciente:</Label> {appointment.patient}
                                </div>
                                <div className="flex justify-between">
                                    <Label>Médico:</Label> {appointment.doctor}
                                </div>
                                <div className="flex justify-between">
                                    <Label>Especialidade:</Label> {appointment.specialty}
                                </div>
                                <div className="flex justify-between">
                                    <Label>Status:</Label> {appointment.status}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div >
        </>
    )
}