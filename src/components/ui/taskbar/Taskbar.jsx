import StartButton from './StartButton'
import SystemTray from './SystemTray'
import TaskbarContent from './TaskbarContent'

import styles from './Taskbar.module.css'
function Taskbar({ startButtonClick, visibility, activeWindows, taskbarClick}){
    return(
        <div className={styles.taskbar}>
            <StartButton onClick={startButtonClick} activeState={visibility}/>
            <TaskbarContent activeWindows={activeWindows} onClick={taskbarClick}/>
            <SystemTray />
        </div>
    )
}

export default Taskbar