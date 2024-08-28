import styles from './LeagueClient.module.css'

import Window from "../Window"
import Button from '../../components/ui/buttons/Button'

function LeagueClient(){
    return(
        <>
            <Window title="League of Legends 0.0.1">
                <div className={styles.league_container}>
                    
                </div>
            </Window>
        </>
    )
}

export default LeagueClient