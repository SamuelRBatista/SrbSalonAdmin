import React from 'react';
import AppointmentList from '../../../components/appointment/AppointmentList';
export default function AppointmentPage({ appointments, onRemoveAppointment }) {
  return (
    <AppointmentList
      appointments={appointments}
      onRemoveAppointment={onRemoveAppointment}
    />
  );
}
