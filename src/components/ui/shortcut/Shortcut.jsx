import styles from './Shortcut.module.css'
import shortcutIcon from '../../../assets/icons/shortcut.png'

const Shortcut = ({ title, icon, isShortcut, onDoubleClick}) =>{
    return(
        <div className={styles.shortcut} onDoubleClick={onDoubleClick}>

            {isShortcut &&
            <div className={styles.shortcut_indicator}>
                <img src={shortcutIcon} alt="shortcut" className={styles.shortcut_indicator_image}/>
            </div>
            }

            <img src={icon} alt={title} className={styles.shortcut_icon} />
            {title} 

        </div>
    )
}

export default Shortcut