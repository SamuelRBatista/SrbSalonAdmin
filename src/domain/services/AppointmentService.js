import AppointmentRepositoryImpl from "../../infrastructure/repositories/AppointmentRepositoryImpl";

class AppointmentService{

    constructor(appointmentRepository){
    this.appointmentRepository = appointmentRepository;
    }

    async getAllAppointments(){
        return await this.appointmentRepository.getAllAppointments();
    }

    async getAppointmentById(id){
        return await this.appointmentRepository.getAppointmentById(id);
    }

    async getClientsAndProducts(){
        return await this.appointmentRepository.getClientsAndProducts();
    }

    async createAppointment(formData){
        return await this.appointmentRepository.createAppointment(formData);
    }

    async updateAppointment(id, appointmentData){
        return await this.appointmentRepository.updateAppointment(id, appointmentData);
    }

    async deleteAppointment(id){
        return await this.appointmentRepository.deleteAppointment(id)
    }
}

const appointmentRepository = new AppointmentRepositoryImpl();
const appointmentService = new AppointmentService(appointmentRepository);
export default appointmentService;