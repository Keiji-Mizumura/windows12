import StartButton from '../startmenu/StartButton'
import SystemTray from '../systemtray/SystemTray'
import TaskbarContent from './TaskbarContent'

import styles from './Taskbar.module.css'
const Taskbar = ({ startButtonClick, visibility, activeWindows, taskbarClick}) => {
    return(
        <div className={styles.taskbar}>
            <StartButton onClick={startButtonClick} activeState={visibility}/>
            <TaskbarContent activeWindows={activeWindows} onClick={taskbarClick}/>
            <SystemTray />
        </div>
    )
}

export default Taskbar