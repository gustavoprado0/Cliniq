"use client";

import { Card, CardHeader, CardContent, CardTitle } from "@/features/shared/ui/card";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function DashboardPage() {
  const stats = {
    doctors: 12,
    patientsToday: 34,
    revenueWeekly: 2450,
    revenueMonthly: 76500,
  };

  const revenueData = [
    { day: "Semana 1", receita: 500 },
    { day: "Semana 2", receita: 800 },
    { day: "Semana 3", receita: 600 },
    { day: "Semana 4", receita: 900 },
  ];

  const appointmentsData = [
    { doctor: "Dr. João", appointments: 12 },
    { doctor: "Dr. Maria", appointments: 8 },
    { doctor: "Dr. Pedro", appointments: 10 },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {/* Cards de resumo */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total de Médicos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">{stats.doctors}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pacientes Hoje</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">{stats.patientsToday}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Faturamento Semanal</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">R$ {stats.revenueWeekly.toLocaleString()}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Faturamento Mensal</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">R$ {stats.revenueMonthly.toLocaleString()}</p>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Faturamento Diário</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="receita" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Agendamentos por Médico</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={appointmentsData}>
                <XAxis dataKey="doctor" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="appointments" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
