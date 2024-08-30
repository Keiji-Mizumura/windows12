import React, { useState, useEffect } from 'react';
import styles from './SystemTray.module.css';

const SystemTray = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const month = currentTime.getMonth() + 1;
  const year = currentTime.getFullYear();
  const date = currentTime.getDate();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  
  // Format the time as hh:mm:ss AM/PM
  const formattedTime = `${hours % 12 || 12}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds} ${hours >= 12 ? 'PM' : 'AM'}`;

  return (
    <div className={styles.system_tray}>
      <div className={styles.date_time}>
        <p>{formattedTime}</p>
        <p>{year}/{month}/{date}</p>
      </div>
    </div>
  );
};

export default SystemTray;
