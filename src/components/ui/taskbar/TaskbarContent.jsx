import TaskbarButton from './TaskbarButton'
import styles from './TaskbarContent.module.css'

import leagueIcon from '../../../assets/icons/LOL.jpg'
import chromeIcon from '../../../assets/icons/chrome-logo.svg'
import discordIcon from '../../../assets/icons/discord.png'
import notepadIcon from '../../../assets/icons/notepad.png'

const taskbarItems = [
    {
        title: "League of Legends",
        icon: leagueIcon
    },
    {
        title: "Google Chrome", 
        icon: chromeIcon
    },
    {
        title: "Discord (12)", 
        icon: discordIcon
    },
    {
        title: "Notepad", 
        icon: notepadIcon,
        active: true
    }
]

function TaskbarContent(){
    return(
        <div className={styles.taskbar_content}>
            {taskbarItems.map((result, id) => <TaskbarButton title={result.title} icon={result.icon} active={result.active} key={id}/>)}
        </div>
    )
}

export default TaskbarContent