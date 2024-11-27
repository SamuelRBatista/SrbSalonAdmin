import { BASE_URL } from '../api/apiClient'
class ServiceRepositoryImpl {
  // Método para obter todos os agendamentos
  async getAllServices() {
    try {
    
  const response = await fetch(`${BASE_URL}/services`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        console.error('Network response was not ok. Status:', response.status);
        throw new Error(`Failed to fetch services. Status: ${response.statusText}`);
      }
      const data = await response.json();      
      return data;
    } catch (error) {
      console.error('Error fetching services:', error);
      throw new Error(`Error fetching services: ${error.message}`);
    }
  }
  
  async getServiceById(id) {
    try {
      const response = await fetch(`${BASE_URL}/services/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        console.error('Failed to fetch appointment. Status:', response.status);
        throw new Error(`Failed to fetch appointment with ID ${id}. Status: ${response.statusText}`);
      }
      const data = await response.json();      
      return data;
    } catch (error) {
      console.error('Error fetching service by ID:', error);
      throw new Error(`Error fetching service with ID ${id}: ${error.message}`);
    }
  } 
  async createService(serviceData) {
    try {
      const response = await fetch(`${BASE_URL}/service`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(serviceData),
      });
      if (!response.ok) {
        console.error('Failed to create service. Status:', response.status);
        throw new Error(`Failed to create service. Status: ${response.statusText}`);
      }
      const data = await response.json();
      console.log('Service created:', data);
      return data;
    } catch (error) {
      console.error('Error creating service:', error);
      throw new Error(`Error creating service: ${error.message}`);
    }
  }
  async updateService(id, updatedData) {
    try {
      const response = await fetch(`${BASE_URL}/services/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        console.error('Failed to update service. Status:', response.status);
        throw new Error(`Failed to update service with ID ${id}. Status: ${response.statusText}`);
      }
      const data = await response.json();
      console.log('DADOS DO Serviço vindo da api:', data);
      return data;
    } catch (error) {
      console.error('Error updating service:', error);
      throw new Error(`Error updating service with ID ${id}: ${error.message}`);
    }
  }
  async deleteService(id) {
    try {
      const response = await fetch(`${BASE_URL}/services/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        console.error('Failed to delete service. Status:', response.status);
        throw new Error(`Failed to delete service with ID ${id}. Status: ${response.statusText}`);
      }
      console.log(`Service with ID ${id} deleted successfully.`);
      return { message: `Service with ID ${id} deleted successfully.` };
    } catch (error) {
      console.error('Error deleting service:', error);
      throw new Error(`Error deleting service with ID ${id}: ${error.message}`);
    }
  }
}
export default ServiceRepositoryImpl;
