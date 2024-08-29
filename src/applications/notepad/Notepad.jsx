import styles from './Notepad.module.css'

import notepadIcon from '../../assets/icons/notepad.png'

import Window from "../Window";
import MenuBar from '../MenuBar';

function Notepad({ onClose, onActive, coordinates, visible }){
    if(visible){    
        return(
            <Window 
                title={`Untitled - Notepad`} 
                onClose={onClose} 
                icon={notepadIcon} 
                onActive={onActive} 
                coordinates={coordinates}
                defaultSize={{width: 300, height: 300}}
                >
                <MenuBar />
                <div className={styles.notepad_container}>
                    <textarea className={styles.textarea}></textarea>
                </div>
            </Window>
        )
    }
    else{
        return <></>
    }
}

export default Notepad