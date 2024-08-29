import styles from './Notepad.module.css'

import notepadIcon from '../../assets/icons/notepad.png'

import Window from "../Window";

function Notepad({ onClose, onActive, active }){
    return(
        <>
            <Window title="Untitled - Notepad" onClose={onClose} icon={notepadIcon} onActive={onActive} active={active}>
                <div className={styles.notepad_container}>
                    <textarea className={styles.textarea}></textarea>
                </div>
            </Window>
        </>
    )
}

export default Notepad