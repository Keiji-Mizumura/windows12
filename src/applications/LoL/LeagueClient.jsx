import styles from './LeagueClient.module.css'

import Window from "../Window"

import LoLIcon from "../../assets/icons/LOL.jpg"

function LeagueClient({ onClose, onActive, coordinates}){
    return(
        <>
            <Window 
                title="League of Legends 0.0.1"
                onClose={onClose} icon={LoLIcon}
                onActive={onActive}
                coordinates={coordinates}
                defaultSize={{
                    width: 600,
                    height: 500
                }}
                >
                <div className={styles.league_container}>
                    
                </div>
            </Window>
        </>
    )
}

export default LeagueClient