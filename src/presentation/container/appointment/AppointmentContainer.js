import React, { useState, useEffect } from 'react';
import AppointmentService from '../../../domain/services/AppointmentService';
import AppointmentPage from '../../pages/appointment/AppointmentPage';
export default function AppointmentContainer(){
    const[appointments, setAppointments] = useState([]);
    const fetchAppointments = async () => {
        try{
            const data = await AppointmentService.getAllAppointments();
            setAppointments(data);          
        }catch (error) {
            console.log('Failed to fetch agendamentos', error);
        }
    };
    const handleRemoveAppointment = async (id) => {
        console.log('Recebendo no front o id para remoção', id)
        try {
          await AppointmentService.deleteAppointment(id);
          setAppointments((prev) => prev.filter((appt) => appt.id !== id));
          console.log(`Agendamento ${id} removido com sucesso.`);
        } catch (error) {
          console.error('Erro ao remover agendamento:', error);
        }
      };
      
    useEffect(() => {
        fetchAppointments();
    }, []);


    


    return(
        <AppointmentPage
        appointments={appointments}
        onRemoveAppointment={handleRemoveAppointment}
        />

    );  
}