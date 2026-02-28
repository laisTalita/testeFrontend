import Button from "./Button"
import styles from '../../styles/Form.module.css'

export default function Form({children,onSubmit,textButton,className, isOrange = false, isBlue=false}) {
    return(
        <form action="" onSubmit={onSubmit} 
        className={`${styles.form} ${isOrange && styles.isOrange} ${isBlue && styles.isBlue}`}>
            {children}
            <Button>{textButton}</Button>
        </form>
    )
}