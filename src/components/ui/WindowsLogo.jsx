import styles from "./WindowsLogo.module.css"

function WindowsLogo(){
    return(
        <div className={styles.windows_logo}>
            <div className={styles.square}></div>
            <div className={styles.square}></div>
            <div className={styles.square}></div>
            <div className={styles.square}></div>
        </div>
    )
}

export default WindowsLogo