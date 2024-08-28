import styles from './MenuItem.module.css'

function MenuItem({ title, icon, shutdown, hasDropDown, onClick }){
    return(
        <div className={styles.item} style={ shutdown ? {borderTop: "2px solid #999"} : {} } onClick={onClick}>
            <img src={icon} />
            <p className={styles.text}>
                {title}
            </p>  
            {hasDropDown ? <div className={styles.arrow}>▶</div> : <></>}
        </div>
    )
}

export default MenuItem