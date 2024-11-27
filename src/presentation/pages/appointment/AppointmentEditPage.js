import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppointmentEdit from '../../../components/appointment/AppointmentEdit';
export default function AppointmentEditPage({services, appointmentData, handleSubmit, handleChange }){
    const navigate = useNavigate();    
    return(
        <AppointmentEdit
        handleChange={handleChange}
        appointmentData = {appointmentData}
        handleSubmit = {handleSubmit}  
        navigate = {navigate} 
        services = {services}     
        />
    );
}