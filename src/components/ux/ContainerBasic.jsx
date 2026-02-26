import { IoIosArrowRoundBack,IoIosArrowRoundForward  } from "react-icons/io";
import slideBar from '../../assets/images/Slidebar.svg'
import sliderBarBlue from '../../assets/images/SlidebarBlue.svg'

export default function ContainerBasic({text,titulo,children,blue = false}){
    return(
        <section>
            <div>
                <p>{text}</p>
                <h3>{titulo}</h3>
            </div>
            {children}
              <section>
                <div>
                    <IoIosArrowRoundBack/>
                    <IoIosArrowRoundForward/>
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