import TaskbarButton from './TaskbarButton'
import styles from './TaskbarContent.module.css'

const TaskbarContent = ({ activeWindows, onClick }) => {
    
    return(
        <div className={styles.taskbar_content}>
            {activeWindows.map((result, id) => <TaskbarButton title={result.title} icon={result.icon} active={result.active} key={id} onClick={() => onClick(result.key)}/>)}
        </div>
    )
}

export default TaskbarContent