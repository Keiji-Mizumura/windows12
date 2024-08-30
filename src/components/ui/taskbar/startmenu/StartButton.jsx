import Button from "../../buttons/Button"
import WindowsLogo from "../../WindowsLogo"

import styles from './StartButton.module.css'

function StartButton({ onClick, activeState }){
    return(
        <Button customStyle={styles.start_button} onClick={onClick} addedStyle={ activeState ? {backgroundColor: "#bbb", border: "2px solid #bbb"} : {}}>
            <WindowsLogo />
            START
        </Button>
    )
}

export default StartButton