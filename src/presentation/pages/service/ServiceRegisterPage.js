import React from 'react';
import ServiceRegister from '../../../components/service/ServiceRegister';

const ServiceRegisterPage = ({formData, setFormData, onSubmit, errors}) => (
   <ServiceRegister
        formData = {formData}
        setFormData = {setFormData}
        onSubmit = {onSubmit}
        error= {errors}
   />
)
export default ServiceRegisterPage;