import styles from './MenuItem.module.css'

function MenuItem({ title, icon, shutdown, hasDropDown, onClick, dropDownItems }){
    return(
        <div className={styles.item} style={ shutdown ? {borderTop: "2px solid #999"} : {} } onClick={onClick}>
            <img src={icon} />
            <p className={styles.text}>
                {title}
            </p>  
            {hasDropDown ? <div className={styles.arrow}>▶</div> : <></>}
            {hasDropDown ? 
            <div className={styles.nav}>
                {
                    dropDownItems.map((result, index) => 
                    <div className={styles.nav_item} key={index} onClick={result.onClick}>
                        <img className={styles.nav_image} src={result.icon} alt={result.title} />
                        <p>{result.title}</p>
                    </div>)
                }     
            </div> : <></>}
        </div>
    )
}

export default MenuItem