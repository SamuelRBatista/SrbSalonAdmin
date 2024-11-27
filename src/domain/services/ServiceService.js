import ServiceRepositoryImpl from "../../infrastructure/repositories/ServiceRepositoryImpl";

class ServiceService{

    constructor(serviceRepository){
    this.serviceRepository = serviceRepository;
    }

    async getAllServices(){
        return await this.serviceRepository.getAllServices();
    }

    async getServiceById(id){
        return await this.serviceRepository.getServiceById(id);
    }

   

    async createService(formData){
        return await this.serviceRepository.createService(formData);
    }

    async updateService(id, serviceData){
        return await this.serviceRepository.updateService(id, serviceData);
    }

    async deleteService(id){
        return await this.serviceRepository.deleteService(id)
    }
}

const serviceRepository = new ServiceRepositoryImpl();
const serviceService = new ServiceService(serviceRepository);
export default serviceService;