import styles from '../../styles/SectionGreen.module.css'

function formatNumber(number) {
  return number.toLocaleString('pt-BR');
}
export default function SectionGreen({data , isOrange = false, isBlue=false}) {
    return(
        <section className={`${styles.sectionGreen} ${isOrange && styles.sectionOrange} ${isBlue && styles.secBlue}`}>
            <div className={styles.sectionGreenDiv}>
                {data?.map((item,index) =>(
                    <div key={index} className={styles.containerGreen}>
                        <h3 key={item.id}>
                        <span>+</span>
                        {index === data.length - 1 
                        ? item.number 
                        : formatNumber(item.number)}
                    </h3>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}