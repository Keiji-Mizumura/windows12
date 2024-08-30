import styles from './Notepad.module.css'

import notepadIcon from '../../../assets/icons/notepad.png'

import Window from "../Window";
import MenuBar from '../MenuBar';

const Notepad = ({ onClose, onActive, coordinates, visible, title, content }) =>{
    if(visible){    
        return(
            <Window 
                title={title ? `${title} - Notepad` : "Untitled - Notepad"} 
                onClose={onClose} 
                icon={notepadIcon} 
                onActive={onActive} 
                coordinates={coordinates}
                defaultSize={{width: 300, height: 300}}
                >
                <MenuBar />
                <div className={styles.notepad_container}>
                    <textarea className={styles.textarea}>
                        {content}
                    </textarea>
                </div>
            </Window>
        )
    }
    else{
        return <></>
    }
}

export default Notepad