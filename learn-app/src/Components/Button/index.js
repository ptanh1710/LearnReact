import clsx from 'clsx';
import styles from './Button.module.scss';
// import './Button.module.scss';
function Button({ children, primary, danger }) {

    const classes = clsx(styles.btn, {
        [styles.primary] : primary,
        [styles.primary] : danger,
    })

    return (
        <button
            className={classes}
        >
            {children}
        </button>
    )
}

export default Button