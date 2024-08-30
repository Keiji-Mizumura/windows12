import styles from './SystemTray.module.css'

const today = new Date()

const month = today.getMonth()+1;
const year = today.getFullYear();
const date = today. getDate();

const SystemTray = () =>{
    return(
        <div className={styles.system_tray}>
            <div className={styles.date_time}>
                <p>10:50 PM</p>
                <p>{year}/{month}/{date}</p>
            </div>
        </div>
    )
}

export default SystemTray