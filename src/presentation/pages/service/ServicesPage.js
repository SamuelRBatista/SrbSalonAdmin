import React from 'react';
import Service from '../../../components/service/ServiceList'

export default function ServicePage({services, onRemoveAppointment}){
    return (
        <Service
        services = {services}
        onRemoveAppointment={onRemoveAppointment}
        />
    )
}