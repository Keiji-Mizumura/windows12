import styles from './ShortcutGrid.module.css'
import Shortcut from './Shortcut'

import chromeIcon from '../../../assets/icons/chrome-logo.svg'
import discordIcon from '../../../assets/icons/discord.png'
import folderIcon from '../../../assets/icons/folder.png'
import leagueIcon from '../../../assets/icons/LOL.jpg'
import osuIcon from '../../../assets/icons/osu-logo.svg'
import frozenThrone from '../../../assets/icons/frozenthrone.png'
import notepadIcon from '../../../assets/icons/notepad.png'
import mycomputerIcon from '../../../assets/icons/mycomputer.png'
import phoneIcon from '../../../assets/icons/phone.png'
import binFullIcon from '../../../assets/icons/bin_full.svg'
import documentIcon from '../../../assets/icons/document.png'

import Notepad from '../../applications/notepad/Notepad'
import Chrome from '../../applications/Chrome/Chrome'
import LeagueClient from '../../applications/LoL/LeagueClient'
import Osu from '../../applications/osu!/Osu'
import Discord from '../../applications/Discord/Discord'

const shortcuts = [
    {
        title: "My Computer",
        icon: mycomputerIcon,
    },
    {
        title: "Phone Dialer",
        icon: phoneIcon,
    },
    {
        title: "Recycle Bin",
        icon: binFullIcon,
    },
    {
        title: "Google Chrome",
        icon: chromeIcon,
        isShortcut: true,
        item: <Chrome/>
    },
    {
        title: "Discord",
        icon: discordIcon,
        isShortcut: true,
        item: <Discord/>
    },
    {
        title: "New folder",
        icon: folderIcon
    },
    {
        title: "League of Legends",
        icon: leagueIcon,
        isShortcut: true,
        item: <LeagueClient />
    },
    
    {
        title: "osu!",
        icon: osuIcon,
        isShortcut: true,
        item: <Osu />
    },

    {
        title: "Frozen throne",
        icon: frozenThrone,
        isShortcut: true
    },

    {
        title: "wifi-password.txt",
        icon: notepadIcon,
        item: <Notepad title="wifi-password.txt" content="abcdefg12345" />
    },

    {
        title: "New Wordpad Document",
        icon: documentIcon,
    },

]

const ShortcutGrid = ({ clickedItem }) =>{
    return (
        <div className={styles.shortcut_grid}>
            {shortcuts.map((result, id) => <Shortcut title={result.title} icon={result.icon} key={id} isShortcut={result.isShortcut}
                onDoubleClick={() => clickedItem(result.item, {
                    title: result.title,
                    icon: result.icon
                })}
            />)}
        </div>
    )
}

export default ShortcutGrid