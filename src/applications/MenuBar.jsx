import styles from "./MenuBar.module.css"

import { useState } from "react"

function MenuBar(){
    const [showDropDown, setShowDropDown] = useState(false);

    return(
        <nav className={styles.nav}>
            <div className={styles.nav_item}>
                <p onClick={()=> setShowDropDown(!showDropDown)}>
                    <u>F</u>ile
                </p>
                <div className={styles.dropdown} style={showDropDown ? {display: "block"} : {display: "none"}}>
                    <div className={styles.dropdown_item}>New</div>
                    <div className={styles.dropdown_item}>New Window</div>
                    <div className={styles.dropdown_item}>Open</div>
                    <div className={styles.dropdown_item}>Save</div>
                    <div className={styles.dropdown_item}>Save As...</div>
                </div>
            </div>
            <div className={styles.nav_item}><u>E</u>dit</div>
            <div className={styles.nav_item}><u>S</u>earch</div>
            <div className={styles.nav_item}><u>H</u>elp</div>
        </nav>
    )
}

export default MenuBar