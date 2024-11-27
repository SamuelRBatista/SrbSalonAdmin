import React from 'react'
import Card from '../Utilitarios/Cards'

export default function Dashboard({ appointmentCount, serviceCount}){
 
    return(    
                 
           <Card 
            appointmentCount={appointmentCount}  
            serviceCount = {serviceCount}           
           />    
       
    )
}