import styles from './Osu.module.css'

import osuIcon from '../../assets/icons/osu-logo.svg'

import Window from "../Window";
import MenuBar from '../MenuBar';

function Osu({ onClose, onActive, coordinates, visible }){
    if(visible){    
        return(
            <Window 
                title={`osu!`} 
                onClose={onClose} 
                icon={osuIcon} 
                onActive={onActive} 
                coordinates={coordinates}
                defaultSize={{width: 600, height: 400}}
                >
                <iframe className={styles.game} src="https://keijimizumura.github.io/osulayser.github.io/" title="description"></iframe> 
                
            </Window>
        )
    }
    else{
        return <></>
    }
}

export default Osu