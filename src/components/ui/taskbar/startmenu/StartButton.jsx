import Button from "../../buttons/Button"
import WindowsLogo from "../../WindowsLogo"

import startIcon from "../../../../assets/icons/start.jpg"

import styles from './StartButton.module.css'

const StartButton = ({ onClick, activeState }) =>{
    return(
        <Button customStyle={styles.start_button} onClick={onClick} addedStyle={ activeState ? {backgroundColor: "#bbb", border: "2px solid #bbb"} : {}}>
            {/* <WindowsLogo /> */}
            <img className={styles.start_icon} src={startIcon} />
        </Button>
    )
}

export default StartButton