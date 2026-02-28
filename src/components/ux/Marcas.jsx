import m1 from "../../assets/logos/marcas/1.svg"
import m2 from "../../assets/logos/marcas/2.svg"
import m3 from "../../assets/logos/marcas/3.svg"
import m4 from "../../assets/logos/marcas/4.svg"
import m5 from "../../assets/logos/marcas/5.svg"
import m6 from "../../assets/logos/marcas/6.svg"
import m7 from "../../assets/logos/marcas/7.svg"
import m8 from "../../assets/logos/marcas/8.svg"
import m9 from "../../assets/logos/marcas/9.svg"
import m10 from "../../assets/logos/marcas/10.svg"
import m11 from "../../assets/logos/marcas/11.svg"
import m12 from "../../assets/logos/marcas/12.svg"
import m13 from "../../assets/logos/marcas/13.svg"
import m14 from "../../assets/logos/marcas/14.svg"
import m15 from "../../assets/logos/marcas/15.svg"
import m16 from "../../assets/logos/marcas/16.svg"



import e1 from "../../assets/logos/logosEmpresa/1.svg"
import e2 from "../../assets/logos/logosEmpresa/2.svg"
import e3 from "../../assets/logos/logosEmpresa/3.svg"
import e4 from "../../assets/logos/logosEmpresa/4.svg"
import e5 from "../../assets/logos/logosEmpresa/5.svg"
import e6 from "../../assets/logos/logosEmpresa/6.svg"
import e7 from "../../assets/logos/logosEmpresa/7.svg"
import e8 from "../../assets/logos/logosEmpresa/8.svg"
import e9 from "../../assets/logos/logosEmpresa/9.svg"
import e10 from "../../assets/logos/logosEmpresa/10.svg"
import e11 from "../../assets/logos/logosEmpresa/11.svg"
import e12 from "../../assets/logos/logosEmpresa/12.svg"
import e13 from "../../assets/logos/logosEmpresa/13.svg"
import e14 from "../../assets/logos/logosEmpresa/14.svg"
import e15 from "../../assets/logos/logosEmpresa/15.svg"
import e16 from "../../assets/logos/logosEmpresa/16.svg"

import styles from '../../styles/Marcas.module.css'




export default function Marcas({primeiraLista, className}){
    const lista1 = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15, m16];

    const lista2 =[e1,e2,e3,e4,e5,e6,e7,e8,e9,e10,e11,e12,e13,e14,e15,e16
    ];
      const imagens = primeiraLista ? lista1 : lista2;
    return(
        <section  className={`${styles.marcasP} ${className}`}>
                {imagens.map((img, index) => (
                <div>
                    <img key={index} src={img} alt={`Marca ${index + 1}`} />
                 </div>

                ))}
        </section>
    )
}