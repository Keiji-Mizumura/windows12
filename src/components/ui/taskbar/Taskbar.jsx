import StartButton from './StartButton'
import SystemTray from './SystemTray'
import TaskbarContent from './TaskbarContent'

import styles from './Taskbar.module.css'
function Taskbar({ startButtonClick, visibility, activeWindows}){
    return(
        <div className={styles.taskbar}>
            <StartButton onClick={startButtonClick} activeState={visibility}/>
            <TaskbarContent activeWindows={activeWindows}/>
            <SystemTray />
        </div>
    )
}

export default Taskbar