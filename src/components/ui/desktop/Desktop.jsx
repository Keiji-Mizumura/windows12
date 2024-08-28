import styles from './Desktop.module.css';

function Desktop({ children }){
    return(
        <div className={styles.desktop}>
            {children}
        </div>
    )
}

export default Desktop