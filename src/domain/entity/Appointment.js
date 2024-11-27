class Appointment {
  constructor(id, serviceId, name, date, status, createdAt) {
    this.id = id;
    this.serviceId = serviceId;  
    this.name = name;            
    this.date = date;
    this.status = status;       
    this.createdAt = createdAt;  
  }
}
module.exports = Appointment;
