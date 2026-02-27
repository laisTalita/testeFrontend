import data from "../../data/data.json"
import styles from '../../styles/SectionGreen.module.css'

function formatNumber(number) {
  return number.toLocaleString('pt-BR');
}
export default function SectionGreen() {
    return(
        <section className={styles.sectionGreen}>
            <div className={styles.sectionGreenDiv}>
                {data?.sectionGreen.map(item =>(
                    <div key={item.id} className={styles.containerGreen}>
                        <h3><span>+</span>{ item.id!==4 ? formatNumber(item.number):(item.number)}</h3>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}