import { BASE_URL } from '../api/apiClient'

class AppointmentRepositoryImpl {
  async getAllAppointments() {
    try {    
      const response = await fetch(`${BASE_URL}/appointments`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        console.error('Network response was not ok. Status:', response.status);
        throw new Error(`Failed to fetch appointments. Status: ${response.statusText}`);
      }
      const data = await response.json();   
      return data;
    } catch (error) {
      console.error('Error fetching appointments:', error);
      throw new Error(`Error fetching appointments: ${error.message}`);
    }
  }
 
  async getAppointmentById(id) {
    try {
      const response = await fetch(`${BASE_URL}/appointments/${id}`, {
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
      console.error('Error fetching appointment by ID:', error);
      throw new Error(`Error fetching appointment with ID ${id}: ${error.message}`);
    }
  }
  async getClientsAndProducts() {
    try {
      const response = await fetch(`${BASE_URL}/appointment-options`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        console.error('Failed to fetch appointment. Status:', response.status);
        throw new Error(`Failed to fetch appointments. Status: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching appointment by ID:', error);
      throw new Error(`Error creating appointment: ${error.message}`);
    }
  }
  async createAppointment(appointmentData) {
    try {
      const response = await fetch(`${BASE_URL}/appointments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });
      if (!response.ok) {
        console.error('Failed to create appointment. Status:', response.status);
        throw new Error(`Failed to create appointment. Status: ${response.statusText}`);
      }
      const data = await response.json();
      console.log('Appointment created:', data);
      return data;
    } catch (error) {
      console.error('Error creating appointment:', error);
      throw new Error(`Error creating appointment: ${error.message}`);
    }
  }

  async updateAppointment(id, updatedData) {
    try {
      const response = await fetch(`${BASE_URL}/appointments/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      if (!response.ok) {
        console.error('Failed to update appointment. Status:', response.status);
        throw new Error(`Failed to update appointment with ID ${id}. Status: ${response.statusText}`);
      }
      const data = await response.json();    
      return data;
    } catch (error) {
      console.error('Error updating appointment:', error);
      throw new Error(`Error updating appointment with ID ${id}: ${error.message}`);
    }
  }
  async deleteAppointment(id) {
    try {
      const response = await fetch(`${BASE_URL}/appointments/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        console.error('Failed to delete appointment. Status:', response.status);
        throw new Error(`Failed to delete appointment with ID ${id}. Status: ${response.statusText}`);
      }
      console.log(`Appointment with ID ${id} deleted successfully.`);
      return { message: `Appointment with ID ${id} deleted successfully.` };
    } catch (error) {
      console.error('Error deleting appointment:', error);
      throw new Error(`Error deleting appointment with ID ${id}: ${error.message}`);
    }
  }
}
export default AppointmentRepositoryImpl;
