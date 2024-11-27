import React from 'react';
import { peopleOutline, businessOutline, briefcaseOutline, cashOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

export default function Cards({ appointmentCount, serviceCount }) {
    console.log('Agendamento chegando no card', appointmentCount);
    const totalCount = appointmentCount + serviceCount;

    return (
        <div className="cardBox">
            <div className="card">
                <div>
                    <div className="numbers">{appointmentCount}</div>
                    <div className="cardName">Agendamentos</div>
                </div>
                <div className="iconBx">
                    <IonIcon icon={peopleOutline} />
                </div>
            </div>

            <div className="card">
                <div>
                    <div className="numbers">{serviceCount}</div>
                    <div className="cardName">Serviços</div>
                </div>
                <div className="iconBx">
                    <IonIcon icon={businessOutline} />
                </div>
            </div>

            <div className="card">
                <div>
                    <div className="numbers">{totalCount}</div>
                    <div className="cardName">Total</div>
                </div>
                <div className="iconBx">
                    <IonIcon icon={briefcaseOutline} />
                </div>
            </div>

        </div>
    );
}
