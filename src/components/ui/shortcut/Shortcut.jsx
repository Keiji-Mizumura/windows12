import styles from './Shortcut.module.css'

function Shortcut({ title, icon }){
    return(
        <div className={styles.shortcut}>
            <img src={icon} alt={title} className={styles.shortcut_icon} />
            {title}
        </div>
    )
}

export default Shortcut