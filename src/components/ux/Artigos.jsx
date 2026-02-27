import data from  '../../data/data.json'
import styles from '../../styles/Artigos.module.css'
import img from  '../../assets/images/backgroundHome.svg'

export default function Artigos() {
    return(
        <section className={styles.artigos}>
            <div className={styles.conatinerText}>
                <p>Blog</p>
                <h3>Confira nossos artigos</h3>
            </div>
            <div className={styles.confiraA}>
                {data.artigos.map( i => (
                    <div key={i.id}>
                        <img src={img} alt="" />
                        <div>
                            <p>{i.data}</p>
                            <h4>{i.text}</h4>
                        </div>
                    </div>
                ))}
            </div>
           
        </section>
    )
}