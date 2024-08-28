import styles from './Notepad.module.css'

import Window from "../Window";

function Notepad(){
    return(
        <>
            <Window title="Untitled - Notepad">
                <div className={styles.notepad_container}>
                    <textarea className={styles.textarea}></textarea>
                </div>
            </Window>
        </>
    )
}

export default Notepad