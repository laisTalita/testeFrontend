import data from '../../data/data.json'

import aspas from '../../assets/images/aspas.svg'
import cliente1 from '../../assets/icons/cliente1.jpg'
import cliente2 from '../../assets/icons/cliente2.jpg'
import cliente3 from '../../assets/icons/cliente3.jpg'
import cliente4 from '../../assets/icons/cliente4.jpg'
import ContainerBasic from './ContainerBasic';
import styles from '../../styles/Depoimentos.module.css'


const imagens = {
  1: cliente1,
  2: cliente2,
  3: cliente3,
  4:cliente4
};

export default function Depoimentos() {
    return(
        <section className={styles.depoimentos}>
             <ContainerBasic 
             className={styles.containerP}
             text={"Depoimentos"} 
             titulo={"O que nossos clientes estão dizendo"}
             >
            {
                data?.depoimentos.map(item =>(
                  <div className={styles.containerCards}>
                      <img src={aspas} alt="" />
                      <div key={item.id}>
                          <div className={styles.depoiments}>
                              <img src={imagens[item.img]} alt="" />
                              <h4>{item.nome}</h4>
                          </div>
                          <p>{item.text}</p>
                      </div>
                  </div>
                ))
            }
            </ContainerBasic>
        </section>
    )
}