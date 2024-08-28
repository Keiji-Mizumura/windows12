import styles from './ShortcutGrid.module.css'
import Shortcut from './Shortcut'

import chromeIcon from '../../../assets/icons/chrome-logo.svg'
import discordIcon from '../../../assets/icons/discord.png'
import folderIcon from '../../../assets/icons/folder.png'
import leagueIcon from '../../../assets/icons/LOL.jpg'
import osuIcon from '../../../assets/icons/osu-logo.svg'
import frozenThrone from '../../../assets/icons/frozenthrone.png'

const shortcuts = [
    {
        title: "Google Chrome",
        icon: chromeIcon
    },
    {
        title: "Discord",
        icon: discordIcon
    },
    {
        title: "New folder",
        icon: folderIcon
    },
    {
        title: "League of Legends",
        icon: leagueIcon
    },
    
    {
        title: "osu!",
        icon: osuIcon
    },

    {
        title: "Frozen throne",
        icon: frozenThrone
    }

]

function ShortcutGrid(){
    return (
        <div className={styles.shortcut_grid}>
            {shortcuts.map(result => <Shortcut title={result.title} icon={result.icon}/>)}
        </div>
    )
}

export default ShortcutGrid