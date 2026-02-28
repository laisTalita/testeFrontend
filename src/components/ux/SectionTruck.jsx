import styles from  '../../styles/SectionTruck.module.css'

export default function SectionTruck({img = null, className, children, truck =false}) {
    return(
       <section className={`${truck && styles.truck} ${styles.containerForm} ${className}`}>
            <div className={styles.containerChildren}>{children}</div>
        </section> 
    )
    
}