import React, { useState, useEffect } from 'react'
import DashboardPage from '../../pages/dashboard/DashboardPage';
import AppointmentService from '../../../domain/services/AppointmentService';
import ServiceService from '../../../domain/services/ServiceService';


export default function DashboardContainer(){

  const [appointmentCount, setAppointmentCount] = useState(0);
  const [serviceCount, setServiceCount]= useState(0); 

  useEffect(() => {
    const fetchAppointments = async () => {
      try{
        const appointments = await AppointmentService.getAllAppointments();      
        if(appointments && appointments.length > 0){
          setAppointmentCount(appointments.length);
        } else {
          setAppointmentCount(0)
        }
      } catch(error) {
        console.error('Failed to fetch appointment:', error);
      }
    };
    fetchAppointments();
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const services = await ServiceService.getAllServices();      
        if (services && services.length > 0) {       
          setServiceCount(services.length); 
        } else {
          console.log('Nenhum services encontrado');
          setServiceCount(0); 
        }
      } catch (error) {
        console.error('Failed to fetch services:', error);
      }
    };

    fetchServices();
  }, []);

    return(
    <DashboardPage 
    appointmentCount={appointmentCount}  
    serviceCount = {serviceCount}      
    />
  );
}