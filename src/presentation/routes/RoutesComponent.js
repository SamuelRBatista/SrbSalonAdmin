import { Routes, Route } from 'react-router-dom';
import Dashboard from '../container/dashboard/DashboardContainer';
import AppointmentListContainer from '../container/appointment/AppointmentContainer';
import AppointmentEditContainer from '../container/appointment/AppointmentEditContainer';
import ServiceListContainer from '../container/service/ServiceContainer';
import ServiceRegisterContainer  from '../container/service/ServiceRegisterContainer';
import ServiceEditContainer from '../container/service/ServiceEditContainer';

const RouteComponent = () => {
    return(             
            <Routes>
            <Route path="/" element={<Dashboard />} /> 
            <Route path="/appointment" element={<AppointmentListContainer />} />
            <Route path="/appointments/:id" element={< AppointmentEditContainer />} />
            <Route path="/service" element={<ServiceListContainer />} />
            <Route path="/add-service" element={<ServiceRegisterContainer/>}/>
            <Route path="/services/:id" element={< ServiceEditContainer />} />
            {/* <Route path="/add-product" element={<ProductAdd/>}/> */}
            </Routes>     
    );
};
export default RouteComponent;

