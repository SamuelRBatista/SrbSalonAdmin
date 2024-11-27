import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ServiceRegister ({ setFormData, formData, onSubmit}){
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  }
  const handleChange = (e)=> {
    const {name, value} =e.target;
    setFormData({
      ...formData,
      [name]:value
    });
  };
    return(
      <>
   
      <div className="product-form-container">

        <h2>Cadastrar Novo Serviço</h2>
            {/* Botão de Voltar */}
        <button className="back-btn" onClick={() => navigate('/service')}>
          Voltar
        </button>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Digite o nome do serviço"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Preço</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Digite o preço do serviço"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Digite a descrição do serviço"
              required
            />
          </div>
          <button type="submit" className="submit-btn">Cadastrar</button>
        </form>
        </div>
      </>
    
    )  
  }




