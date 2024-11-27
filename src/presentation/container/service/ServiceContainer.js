import React, { useState, useEffect } from 'react';
import ServiceService from '../../../domain/services/ServiceService';
import ServicesPage from '../../pages/service/ServicesPage'

export default function ServiceContainer(){
    const[services, setServices] = useState([]);

    const fetchServices = async () => {
        try{
            const data = await ServiceService.getAllServices();
            console.log('Serviço chegando no container',data);
            setServices(data);          
        }catch (error) {
            console.log('Failed to fetch serviços', error);
        }
    };
    useEffect(() => {
        fetchServices();
    }, []);

    const handleRemoveService = async (id) => {
        console.log('Recebendo no front o id para remoção', id)
        try {
          await ServiceService.deleteService(id);
          setServices((prev) => prev.filter((appt) => appt.id !== id));
          console.log(`Serviço ${id} removido com sucesso.`);
        } catch (error) {
          console.error('Erro ao remover o serviço:', error);
        }
      };
 

    return(
        <ServicesPage
        services={services}
        onRemoveAppointment={handleRemoveService}
        />

    );  
}