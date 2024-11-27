import React from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceEdit from '../../../components/service/ServiceEdit';
export default function ServiceEditPage({serviceData, handleSubmit, handleChange }){
    const navigate = useNavigate();    
    return(
        <ServiceEdit
        handleChange={handleChange}
        serviceData = {serviceData}
        handleSubmit = {handleSubmit}  
        navigate = {navigate}  
        />
    );
}