import React from 'react';

const ServiceEdit = ({
  serviceData,
  handleSubmit,
  navigate,
  handleChange 
}) => {
  return (
    <>
  
    <div className="product-form-container">
      <h2>Alterar o Agendamento</h2>
      <button className="back-btn" onClick={() => navigate('/service')}>
        Voltar
      </button>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome do Serviço</label>
          <input
            id="name"
            name="name"
            type="text"
            value={serviceData.name || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Descrição</label>
          <input
            type="text"
            id="description"
            name="description"
            value={serviceData.description || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={serviceData.price || ''}
            onChange={handleChange}
            placeholder="Digite o status o valor do serviço"
            required
          />
        </div>
        
        <button type="submit" className="submit-btn">Alterar</button>
      </form>
    </div>    
    </>
    
  );
};

export default ServiceEdit;
