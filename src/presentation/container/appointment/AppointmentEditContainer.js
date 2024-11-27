import React, { useState, useEffect } from 'react';
import AppointmentEditPage from '../../pages/appointment/AppointmentEditPage';
import { useParams, useNavigate } from 'react-router-dom';
import AppointmentService from '../../../domain/services/AppointmentService';
import ServiceService from '../../../domain/services/ServiceService';
export default function AppointmentEditContainer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const[services, setServices] = useState([]);

  const [appointmentData, setAppointmentData] = useState({   
    userId: '',
    productId: '',
    date: '',
    status: '',
  });

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        console.log("Buscando agendamento com ID:", id);  // Confirma o ID
        const appointment = await AppointmentService.getAppointmentById(id);        
        console.log("Vindo do backend", appointment);
        
        setAppointmentData({
          name: appointment.name,
          serviceName: appointment.serviceName,
          date: appointment.date,
          status: appointment.status,
        });
      } catch (error) {
        console.log('Erro ao buscar o agendamento:', error);
      }
    };  
    fetchAppointment();
  }, [id]);
  const fetchServices = async () => {
    try{
        const data = await ServiceService.getAllServices();
        setServices(data);          
    }catch (error) {
        console.log('Failed to fetch serviços', error);
    }
};
useEffect(() => {
    fetchServices();
}, []);  
  const handleSubmit = async (e) => {
    e.preventDefault(); 
  console.log('Dados do formulario de edição', appointmentData)
    try {     
      await AppointmentService.updateAppointment(id, appointmentData );
      alert('Agendamento atualizado com sucesso!');
      navigate('/');
    } catch (error) {
      console.error('Erro ao atualizar agendamento:', error);
      alert('Erro ao atualizar agendamento.');
    }
  };  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <AppointmentEditPage
      appointmentData={appointmentData}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      navigate={navigate}
      services = {services}    
    />
  );
}
