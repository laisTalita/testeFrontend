import Button from "../ux/Button";
import styles from '../../styles/Home.module.css'
import Data from "../../data/data.json"
import kids from '../../assets/images/kids.png'
import { MdOutlineArrowOutward } from "react-icons/md";
import Lamp from '../../assets/images/Lamp.svg'
import { IoIosArrowRoundBack,IoIosArrowRoundForward  } from "react-icons/io";
import Video from "../ux/Video";
import SectionGreen from "../ux/SectionGreen";
import Ebook from "../ux/Ebook";
import Artigos from "../ux/Artigos";
import Depoimentos from "../ux/Depoimentos";
import clsx from "clsx";
import { MdArrowOutward } from "react-icons/md";

export default function Home(){
    return(
        <section>
            <div className={styles.home}>
                <div className={styles.homeContainer}>
                    <div>
                        <h1>curso maker</h1>
                        <p>Cursos semestrais ou anuais para desenvolver as habilidades socioemocionais do estudante, que são necessárias nos dias de hoje.</p>
                        <div className={styles.homeContainerCursos}>
                            <Button>
                                Matricule-se já
                                <MdOutlineArrowOutward/>
                            </Button>
                            <div className={styles.containerLines}></div>
                            <div className={styles.containerArrows}>
                                <IoIosArrowRoundBack className={styles.arrow}/>
                                <IoIosArrowRoundForward className={styles.arrow}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main className={styles.mainContainer}>
                <section className={styles.abs}>
                    <div className={styles.containerP}>
                        {Data.pagina1.map(item =>(
                            <div className={clsx(
                                styles.containerParcerias,
                                item.id ===1 && styles.cor1,
                                item.id === 2 && styles.cor2,
                                item.id === 3 && styles.cor3
                            )
                                }>
                                <img src={kids} alt="" />
                                <div key={item.id} >
                                    <p className={styles.itemSpan}>{item.span}</p>
                                    <h2>{item.titulo}</h2>
                                    <p className={styles.textP}>
                                    {item.texto.split("BNCC").map((parte, index, array) => (
                                        <span key={index}>
                                        {parte}
                                        {index < array.length - 1 && (
                                            <i className={styles.highlight}>BNCC</i>
                                        )}
                                        </span>
                                    ))}
                                    </p>
                                    <Button>{item.botao}<MdArrowOutward/></Button>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className={styles.streatL}>
                    <div className={styles.streatLW}>
                        <div className={styles.streatLContainer}>
                            <img src={Lamp} alt="streat lamp" />
                            <div>
                                <p>Sobre nós</p>
                                <h3>um espaço <span>maker</span> onde se aprende fazendo!</h3>
                            </div>
                        </div>
                        <div className={styles.streatLContainerDiv}>
                            <p>O MundoMaker é uma empresa de inovação e tecnologia que surgiu com a intenção de proporcionar experiências de aprendizagem que ajudem crianças, jovens e adultos a despertar seus potenciais criativos e empreendedores.
                            Nossas práticas foram embasadas na Educação Integral e na Aprendizagem Criativa e em valores como Acolhimento, Respeito, Inovação, Excelência e Segurança (ARIES).</p>
                            <Button>Saiba mais <MdArrowOutward/></Button>
                        </div>
                    </div>
                </section>
                <Video texto={"Conheça mais do nosso trabalho"} paragrafo={"Vídeos"} multiplos={true}/>
                <SectionGreen/>
                <Ebook/>
                <Artigos/>
                <Depoimentos/>
            </main>
        </section>
    )
}