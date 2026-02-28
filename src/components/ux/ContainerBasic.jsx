import { IoIosArrowRoundBack,IoIosArrowRoundForward  } from "react-icons/io";
import slideBar from '../../assets/images/Slidebar.svg'
import sliderBarBlue from '../../assets/images/SlidebarBlue.svg'
import style from  '../../styles/ContBasic.module.css'

export default function ContainerBasic({text,titulo,children,blue = false,className}){
    return(
        <section >
            <div className={`${className}`}>
                <p>{text}</p>
                <h3>{titulo}</h3>
            </div>
            
            <div className={style.scroll}>
                {children}
            </div>
              <section className={style.footerBasic}>
                <div>
                    <IoIosArrowRoundBack className={style.arrow}/>
                    <IoIosArrowRoundForward className={style.arrow}/>
                </div>
                {
                    blue ? (
                      <img src={sliderBarBlue} alt="" />
                    ) :(<img src={slideBar} alt="" />)

                }
            </section>
        </section>
    )
}