import styles from './Button.module.css'

const Button = ({ children, onClick, customStyle, addedStyle }) => {
    return (
        <button onClick={ onClick } className={`${styles.button} ${customStyle}`} style={addedStyle}>
            { children }
        </button>
    )
}

export default Button