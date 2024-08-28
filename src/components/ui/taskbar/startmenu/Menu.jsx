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

function Menu(){
    return(
        <div className={styles.menu}>
            <MenuItem 
                title={<><u>P</u>rograms</>}
                icon={programsIcon}
                hasDropDown={true}
            />
            <MenuItem 
                title={<><u>D</u>ocuments</>}
                icon={documentsIcon}
                hasDropDown={true}
            />
            <MenuItem 
                title={<><u>S</u>ettings</>}
                icon={settingsIcon}
                hasDropDown={true}
            />
            <MenuItem 
                title={<><u>F</u>ind</>}
                icon={findIcon}
            />
            <MenuItem 
                title={<>Notepad</>}
                icon={notepadIcon}
            />
            <MenuItem 
                title={<><u>R</u>un</>}
                icon={runIcon}
            />
            <MenuItem 
                title="League of Legends"
                icon={leagueIcon}
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