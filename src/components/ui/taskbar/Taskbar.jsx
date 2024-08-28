import StartButton from './StartButton'
import SystemTray from './SystemTray'
import TaskbarContent from './TaskbarContent'

import styles from './Taskbar.module.css'
function Taskbar({ startButtonClick, visibility}){
    return(
        <div className={styles.taskbar}>
            <StartButton onClick={startButtonClick} activeState={visibility}/>
            <TaskbarContent />
            <SystemTray />
        </div>
    )
}

export default Taskbar