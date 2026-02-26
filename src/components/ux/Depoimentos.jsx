import data from '../../data/data.json'

import aspas from '../../assets/images/aspas.svg'
import frame from '../../assets/images/Frame.svg'
import frama2 from '../../assets/images/Frame-1.svg'
import cliente1 from '../../assets/icons/cliente1.jpg'
import cliente2 from '../../assets/icons/cliente2.jpg'
import cliente3 from '../../assets/icons/cliente3.jpg'
import cliente4 from '../../assets/icons/cliente4.jpg'
import ContainerBasic from './ContainerBasic';


const imagens = {
  1: cliente1,
  2: cliente2,
  3: cliente3,
  4:cliente4
};

export default function Depoimentos() {
    return(
        <section>
            <img src={frame} alt="" />
             <ContainerBasic text={"Depoimentos"} titulo={"O que nossos clientes estão dizendo"}>
            {
                data?.depoimentos.map(item =>(
                  <div>
                      <img src={aspas} alt="" />
                      <div key={item.id}>
                          <img src={imagens[item.id]} alt="" />
                          <h4>{item.nome}</h4>
                          <p>{item.text}</p>
                      </div>
                  </div>
                ))
            }
            </ContainerBasic>
          
            <img src={frama2} alt="" />
        </section>
    )
}