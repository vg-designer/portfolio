import React, { useEffect, useState } from 'react';
import { getIPAddress } from './../services/IpService';
import './css/VisitCounter.css';
import content from './content.json';

export function VisitCounter() {
  const [ipAddress, setIpAddress] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchIPAndRecordVisit = async () => {
      const ip = await getIPAddress();
      if (ip) {
        setIpAddress(ip);
        const now = new Date();
        const visitInfo = {
          ip,
          date: now.toLocaleString(),
        };
        recordVisit(visitInfo);
      }
    };

    const recordVisit = (visitInfo) => {
      const storedCount = localStorage.getItem('pageVisitCount');
      const visitCount = storedCount ? parseInt(storedCount, 10) : 0;
      const newCount = visitCount + 1;
      setCount(newCount);
      localStorage.setItem('pageVisitCount', newCount);
      localStorage.setItem('lastVisitInfo', JSON.stringify(visitInfo));
    };

    fetchIPAndRecordVisit();
  }, []);

  return (
    <div className="visit-counter">
      <p>{content.visitcounter.title} {count}</p>
      {/* <p>Última visita desde IP: {ipAddress}</p>
      <p>Fecha y Hora: {visitDate}</p> */}
    </div>
  );
}