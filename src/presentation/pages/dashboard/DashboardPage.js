import React from 'react'
import Dashboard from '../../../components/dashboard/Dashboard'
import Sidebar from '../../../components/Sidebar/Sidebar';

export default function DashboardPage({  appointmentCount, serviceCount}){
    return(  
        <>
           <Sidebar/>
           <Dashboard               
             appointmentCount={appointmentCount}  
             serviceCount = {serviceCount}  
           /> 
        </>
                
    )
}