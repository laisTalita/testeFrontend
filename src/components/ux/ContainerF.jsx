import Button from "../ux/Button"
import styles from '../../styles/ContainerF.module.css'
import { FaArrowTrendUp } from "react-icons/fa6";


export default function ContainerF({className, img ,text,titulo, textButton,children,span,part=false}) {
    return(
        <section className={`${className} ${styles.containerF} ${part && styles.particular } `}>
            <div className={`${styles.containerPrin} `}>
                <img src={img} alt="" />
                <span>{span}</span>
                <h2>{titulo}</h2>
                <p>{text}</p>
                <Button>{textButton}<span><FaArrowTrendUp/></span></Button>
            </div>
                {children}
        </section>
    )
}