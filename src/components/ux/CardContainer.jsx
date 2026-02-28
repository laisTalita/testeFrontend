import styles from '../../styles/CardContainer.module.css'

export default function CardContainer({text, titulo,className,children,isSecond =false}) {
    return(
      <section className={`${className} ${styles.containerCardP}  ${isSecond && styles.principal }`}>
        <div className={styles.secDivOne}>
          <p>{text}</p>
          <h3>{titulo}</h3>
        </div>
        <div className={styles.containerCardC} >
          {children}
        </div>
      </section>
    )
}