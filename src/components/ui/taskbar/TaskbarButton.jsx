import styles from './TaskbarButton.module.css'

import Button from '../buttons/Button'

function TaskbarButton({ title, icon, active, onClick }){
    return(
        <Button customStyle={styles.taskbar_button} addedStyle={ active ? {backgroundColor: "#999"} : {}} onClick={onClick}>
            <img src={icon} alt={title} className={styles.taskbar_icon}/>
            {title}
        </Button>
    )
}

export default TaskbarButton