import TaskbarButton from './TaskbarButton'
import styles from './TaskbarContent.module.css'

import leagueIcon from '../../../assets/icons/LOL.jpg'
import chromeIcon from '../../../assets/icons/chrome-logo.svg'
import discordIcon from '../../../assets/icons/discord.png'
import notepadIcon from '../../../assets/icons/notepad.png'

import { useState } from 'react'

function TaskbarContent({ activeWindows }){
    const [taskbarItems, setTaskbarItems] = useState([{
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
    }]);


    return(
        <div className={styles.taskbar_content}>
            {activeWindows.map((result, id) => <TaskbarButton title={result.title} icon={result.icon} active={result.active} key={id}/>)}
        </div>
    )
}

export default TaskbarContent