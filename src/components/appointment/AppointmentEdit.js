import React from 'react';

const AppointmentEdit = ({
  appointmentData,
  handleSubmit,
  navigate,
  handleChange,
  services 
}) => {
  return (
    <>
  
    <div className="product-form-container">
      <h2>Alterar o Agendamento</h2>
      <button className="back-btn" onClick={() => navigate('/appointment')}>
        Voltar
      </button>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="usersName">Nome do Cliente</label>
          <input
            id="usersName"
            name="usersName"
            type="text"
            value={appointmentData.name || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="serviceId">Serviço</label>
          <select
            id="serviceId"
            name="serviceId"
            value={appointmentData.serviceId || ''}
            onChange={handleChange}
            required
          >
            <option value="">Selecione um serviço</option>
            {services.map(service => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Data do Agendamento</label>
          <input
            type="datetime-local"
            id="date"
            name="date"
            value={appointmentData.date || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <input
            type="text"
            id="status"
            name="status"
            value={appointmentData.status || ''}
            onChange={handleChange}
            placeholder="Digite o status do agendamento"
            required
          />
        </div>
        
        <button type="submit" className="submit-btn">Alterar</button>
      </form>
    </div>
    </>
    
  );
};

export default AppointmentEdit;
