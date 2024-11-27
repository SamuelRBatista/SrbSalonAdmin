import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AppointmentList({ appointments, onRemoveAppointment}) {
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

  
  const handleEdit = (id) => {
     navigate(`/appointments/${id}`);
    console.log('Editando agendamento:', id);
  };
  
  const handleRemove = (id) => {
    if (window.confirm('Tem certeza que deseja remover este agendamento?')) {
      onRemoveAppointment(id);
    }
  };

  return (
    <div className="agenda-container">
      <h1 className="title">Agendamentos</h1>
      
      <button className="back-btn" onClick={handleGoBack}>
        Voltar
      </button>

      {isLoading ? (
        <div className="loading">Carregando...</div>
      ) : (
        <div className="agenda-cards">
          {appointments && appointments.length > 0 ? (
            appointments.map((appt) => (
              <div key={appt.id} className="agenda-card">
                <h4 className="agenda-client-name">{appt.name}</h4>
                <p className="agenda-product-name">Serviço: {appt.serviceName}</p>
                <p className="agenda-date">
                  Data Agendada: {new Date(appt.date).toLocaleString()}
                </p>
                <p className="agenda-status">Status: {appt.status}</p>
                <p className="agenda-created-at">
                  Solicitado em: {new Date(appt.created_at).toLocaleString()}
                </p>
               
                <div className="agenda-actions">
                  <button onClick={() => handleEdit(appt.id)} className="edit-btn">
                    Alterar
                  </button>
                  <button onClick={() => handleRemove(appt.id)} className="remove-btn">
                    Finalizar Agendamento
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
  );
}
