import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { homeOutline, calendarOutline, briefcaseOutline } from 'ionicons/icons';
import './Sidebar.css';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsCollapsed(false);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>
      <nav className="menu">
        <ul>
          <li>
           <Link to="/" className='menu-link'>
              <span className="icon">
                <IonIcon icon={homeOutline} />
              </span>
              {!isCollapsed && <span className="title">Dashboard</span>}
            </Link>  
          </li>
          <li>
          <Link to="/appointment" className='menu-link' >
              <span className="icon">
                <IonIcon icon={calendarOutline} />
              </span>
              {!isCollapsed && <span className="title">Agendamentos</span>}
            </Link>  
          </li>    
          <li>
            <Link to="/service" className='menu-link'>
              <span className="icon">
                <IonIcon icon={briefcaseOutline} />
              </span>
              {!isCollapsed &&<span className="title">Serviços</span>}
            </Link>  
            </li>           
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
