import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function ServiceList({ services,  onRemoveAppointment }) {
console.log('Chagando os serviços', services);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
       const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
 
  const handleGoBack = () => {
    navigate('/');
  };

  const handleAddService = () => {
    navigate('/add-service'); 
  };
    
  const handleEdit = (id) => {
     navigate(`/services/${id}`);
    console.log('Editando serviço:', id);
  };
  
  const handleRemove = (id) => {
    if (window.confirm('Tem certeza que deseja remover este serviço?')) {
      onRemoveAppointment(id);
    }
  };

  return (
    <>  
    <div className="agenda-container">
      <h1 className="title">Serviços</h1>
      
      <button className="back-btn" onClick={handleGoBack}>
        Voltar
      </button>

      <button className="back-btn" onClick={handleAddService}>
        Adicionar Serviço
      </button>

      {isLoading ? (
        <div className="loading">Carregando...</div>
      ) : (
        <div className="agenda-cards">
          {services && services.length > 0 ? (
            services.map((appt) => (
              <div key={appt.id} className="agenda-card">
                <h4 className="agenda-client-name">{appt.name}</h4>
                <p className="agenda-product-name">Serviço: {appt.description}</p>
              
                <p className="agenda-status">Preço: {appt.price}</p>
                               
                <div className="agenda-actions">
                  <button onClick={() => handleEdit(appt.id)} className="edit-btn">
                    Alterar
                  </button>
                  <button onClick={() => handleRemove(appt.id)} className="remove-btn">
                    Remover
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="no-appointments">Não há agendamentos disponíveis.</p>
          )}
        </div>
      )}
    </div>    
    </>   
  );
}
