import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:7070/api/products'); // Substitua com seu endpoint real
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError('Erro ao buscar os produtos.');
        console.error('Erro ao buscar os produtos:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);
  const handleGoBack = () => {
    navigate('/'); // Redireciona para o Dashboard
  };
  const handleAddProduct = () => {
    navigate('/add-product'); // Use navigate em vez de history.push
  };
  return (
    <div className="product-list-container">
      <h1 className="title">Produtos Cadastrados</h1>

         {/* Botão de Voltar */}
      <button className="back-btn" onClick={handleGoBack}>
        Voltar
      </button>

      <button className="back-btn" onClick={handleAddProduct}>
        Adicionar Produto
      </button>
      {error && <div className="error">{error}</div>}
      {isLoading ? (
        <div className="loading">Carregando...</div>
      ) : (
        <div className="product-table">
          {products.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Preço</th>
                  <th>Descrição</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Não há produtos cadastrados.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductList;
