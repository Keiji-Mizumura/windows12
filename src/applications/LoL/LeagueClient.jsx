import styles from './LeagueClient.module.css'

import Window from "../Window"
import Button from '../../components/ui/buttons/Button'

import LoLIcon from "../../assets/icons/LOL.jpg"

function LeagueClient({ onClose, onActive, active}){
    return(
        <>
            <Window title="League of Legends 0.0.1" onClose={onClose} icon={LoLIcon} onActive={onActive} active={active}>
                <div className={styles.league_container}>
                    
                </div>
            </Window>
        </>
    )
}

export default LeagueClient