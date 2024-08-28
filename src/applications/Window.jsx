import styles from './Window.module.css';
import Draggable from 'react-draggable'; // The default

function Window({ children, title }){
    return(
        <Draggable handle=".handle">
            <div className={styles.window}>
                <div className={`${styles.title_bar} handle`}>
                    <p>{title}</p>
                </div>
                {children}
            </div>
        </Draggable>
    )
}

export default Window