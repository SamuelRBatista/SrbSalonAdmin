import React,{useState, useEffect} from 'react';
import ServiceRegisterPage from '../../pages/service/ServiceRegisterPage';
import ServiceService from '../../../domain/services/ServiceService';


export default function ServiceRegisterContainer(){
    const [errors, setErrors] = useState({});
   


    const [formData, setFormData] = useState({   
        name: '',
        description: '',
        price: ''        
      });
    
    const handleSubmit = async () => {
        console.log('Antes de enviar para o serviço',formData);
        try{
            await ServiceService.createService(formData);
            alert('Serviço cadastrado com sucesso!');
            setFormData({
                name:'',
                description:'',
                price:''
            });
        }catch(error){
            alert('Erro ao cadastrar um serviço.');
        }
    }

    return(
        <ServiceRegisterPage  
        formData ={formData}     
        setFormData = {setFormData}
        onSubmit={handleSubmit}
        errors={errors}
        />


    )
}
