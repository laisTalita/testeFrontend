import Button from "../ux/Button";
import Data from "../../data/data.json"

import { MdOutlineArrowOutward } from "react-icons/md";
import Lines from '../../assets/images/Line.svg'
import Lamp from '../../assets/images/Lamp.svg'
import { IoIosArrowRoundBack,IoIosArrowRoundForward  } from "react-icons/io";
import Video from "../ux/Video";
import SectionGreen from "../ux/SectionGreen";
import Ebook from "../ux/Ebook";
import Artigos from "../ux/Artigos";
import Depoimentos from "../ux/Depoimentos";

export default function Home(){
    return(
        <section>
            <header>
                <h1>curso maker</h1>
                <p>Cursos semestrais ou anuais para desenvolver as habilidades socioemocionais do estudante, que são necessárias nos dias de hoje.</p>
                <div>
                    <Button>Matricule-se já
                        <MdOutlineArrowOutward/>
                    </Button>
                    <img src={Lines} alt="lines" />
                    <div>
                        <IoIosArrowRoundBack/>
                        <IoIosArrowRoundForward/>
                    </div>
                </div>
            </header>
            <main>
                <section>
                    {Data.pagina1.map(item =>(
                        <div key={item.id}>
                            <p>{item.span}</p>
                            <h2>{item.titulo}</h2>
                            <p>{item.texto}</p>
                            <Button>{item.botao}</Button>
                        </div>
                    ))}
                </section>
                <section>
                    <img src={Lamp} alt="streat lamp" />
                    <div>
                        <p>Sobre nós</p>
                        <h3>um espaço <span>maker</span> onde se aprende fazendo!</h3>
                    </div>
                    <div>
                        <p>O MundoMaker é uma empresa de inovação e tecnologia que surgiu com a intenção de proporcionar experiências de aprendizagem que ajudem crianças, jovens e adultos a despertar seus potenciais criativos e empreendedores.
                        Nossas práticas foram embasadas na Educação Integral e na Aprendizagem Criativa e em valores como Acolhimento, Respeito, Inovação, Excelência e Segurança (ARIES).</p>
                        <Button>Saiba mais</Button>
                    </div>


                </section>
                <section>
                    <Video texto={"Conheça mais do nosso trabalho"} paragrafo={"Vídeos"}/>
                </section>
                <SectionGreen/>
                <Ebook/>
                <Artigos/>
                <Depoimentos/>
            </main>
        </section>
    )
}