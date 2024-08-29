import styles from './Menu.module.css'
import MenuItem from './MenuItem'

import shutdownIcon from '../../../../assets/icons/shutdown.png';
import programsIcon from '../../../../assets/icons/programs.png';
import documentsIcon from '../../../../assets/icons/documents.png';
import findIcon from '../../../../assets/icons/find.png';
import settingsIcon from '../../../../assets/icons/settings.png';
import notepadIcon from '../../../../assets/icons/notepad.png';
import runIcon from '../../../../assets/icons/run.png';
import leagueIcon from '../../../../assets/icons/LOL.jpg';
import Notepad from '../../../../applications/notepad/Notepad';
import osuIcon from "../../../../assets/icons/osu-logo.svg";
import chromeIcon from "../../../../assets/icons/chrome-logo.svg";
import discordIcon from "../../../../assets/icons/discord.png";
import folderIcon from "../../../../assets/icons/folder.png";

import LeagueClient from '../../../../applications/LoL/LeagueClient';
import Osu from '../../../../applications/osu!/Osu';
import Chrome from '../../../../applications/Chrome/Chrome';

function Menu({ clickedItem }){
    return(
        <div className={styles.menu}>
            <MenuItem 
                title={<><u>P</u>rograms</>}
                icon={programsIcon}
                hasDropDown={true}
                dropDownItems={[
                    {
                        title: "League of Legends",
                        icon: leagueIcon,
                        onClick: () => clickedItem(<LeagueClient/>,{
                            title: "League of Legends",
                            icon: leagueIcon})
                    },
                    {
                        title: "osu!",
                        icon: osuIcon,
                        onClick: () => clickedItem(<Osu/>,{
                            title: "osu!",
                            icon: osuIcon})
                    },
                    ,
                    {
                        title: "Google Chrome",
                        icon: chromeIcon,
                        onClick: () => clickedItem(<Chrome/>,{
                            title: "Google Chrome",
                            icon: chromeIcon})
                    },
                    ,
                    {
                        title: "Discord",
                        icon: discordIcon
                    },
                ]}
            />
            <MenuItem 
                title={<><u>D</u>ocuments</>}
                icon={documentsIcon}
                hasDropDown={true}
                dropDownItems={[
                    {
                        title: "finalproject.txt",
                        icon: notepadIcon,
                        onClick: () => clickedItem(
                            <Notepad 
                                title="finalproject.txt"
                                content="This is final. August 29, 2024 by Me"
                            />,{
                            title: "finalproject.txt",
                            icon: notepadIcon})
                    },
                    {
                        title: "finalproject(final).txt",
                        icon: notepadIcon,
                        onClick: () => clickedItem(<Notepad title="finalproject(final).txt" />,{
                            title: "finalproject(final).txt",
                            icon: notepadIcon})
                    },
                    {
                        title: "config.txt",
                        icon: notepadIcon,
                        onClick: () => clickedItem(<Notepad title="config.txt"/>,{
                            title: "config.txt",
                            icon: notepadIcon})
                    },
                    {
                        title: "secret-codes.txt",
                        icon: notepadIcon,
                        onClick: () => clickedItem(<Notepad title="secret-codes.txt"/>,{
                            title: "secret-codes.txt",
                            icon: notepadIcon})
                    },
                    {
                        title: "favorite-websites.txt",
                        icon: notepadIcon,
                        onClick: () => clickedItem(<Notepad title="favorite-websites.txt"/>,{
                            title: "favorite-websites.txt",
                            icon: notepadIcon})
                    },
                    {
                        title: "100kb worth of ***",
                        icon: folderIcon
                    },
                    {
                        title: "Windows32",
                        icon: folderIcon
                    },
                ]}
            />
            <MenuItem 
                title={<><u>S</u>ettings</>}
                icon={settingsIcon}
                hasDropDown={true}
                dropDownItems={[
                    {
                        title: "Date and time settings",
                        icon: settingsIcon
                    },
                    {
                        title: "Mouse Settings",
                        icon: settingsIcon
                    },
                    {
                        title: "Graphics Settings",
                        icon: settingsIcon
                    },
                    {
                        title: "Audio Settings",
                        icon: settingsIcon
                    },
                    {
                        title: "Internet",
                        icon: settingsIcon
                    },
                ]}
            />
            <MenuItem 
                title={<><u>F</u>ind</>}
                icon={findIcon}
            />
            <MenuItem 
                title={<>Notepad</>}
                icon={notepadIcon}
                onClick={() => clickedItem(<Notepad/>, {
                    title: "Notepad",
                    icon: notepadIcon
                })}
            />
            <MenuItem 
                title={<><u>R</u>un</>}
                icon={runIcon}
            />
            <MenuItem 
                title="League of Legends"
                icon={leagueIcon}
                onClick={() => clickedItem(<LeagueClient/>,{
                    title: "League of Legends",
                    icon: leagueIcon
                })}
            />
            <MenuItem
                shutdown={true}
                title={<>Sh<u>u</u>t Down</>}
                icon={shutdownIcon}
            />
        </div>
    )
}

export default Menu