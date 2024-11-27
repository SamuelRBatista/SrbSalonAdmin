import React, { useState, useEffect } from 'react';
import ServiceEditPage from '../../pages/service/ServiceEditPage';
import { useParams, useNavigate } from 'react-router-dom';
import ServiceService from '../../../domain/services/ServiceService';


export default function ServiceEditContainer() {

  const { id } = useParams();
  const navigate = useNavigate(); 

  const [serviceData, setServiceData] = useState({   
    name: '',
    description: '',
    price: ''  
  });

  useEffect(() => {
    const fetchService = async () => {
      try {
        console.log("Buscando seriços com ID:", id);  // Confirma o ID
        const service = await ServiceService.getServiceById(id);        
        console.log("Vindo do backend", service);
        
        setServiceData({
          name: service.name,
          description: service.description,
          price: service.price,        
        });
      } catch (error) {
        console.log('Erro ao buscar o serviços:', error);
      }
    };  
    fetchService();
  }, [id]);





  
  const handleSubmit = async (e) => {
    e.preventDefault(); 
  console.log('Dados do formulario de edição', serviceData)
    try {     
      await ServiceService.updateService(id, serviceData );
      alert('Serviço atualizado com sucesso!');
      navigate('/');
    } catch (error) {
      console.error('Erro ao atualizar serviço:', error);
      alert('Erro ao atualizar serviço.');
    }
  };  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setServiceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <ServiceEditPage
      serviceData={serviceData}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      navigate={navigate}
    
    />
  );
}
