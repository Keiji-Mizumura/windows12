import styles from './Startmenu.module.css'

import Menu from './Menu';

const StartMenu = ({ visibility, clickedItem }) => {
    return(
        <div className={styles.startmenu} style={ visibility ? {display: "flex"} : {display: "none"} }>
            <div className={styles.title}>
                <p>Windows 12 Professional</p>
            </div>
            <Menu clickedItem={clickedItem}/>
        </div>
    )
}

export default StartMenu