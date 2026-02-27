import Button from "./ux/Button";
import { RiVerifiedBadgeFill ,RiInstagramFill } from "react-icons/ri";
import logo from "../assets/logos/Logo.svg"
import { PiWhatsappLogoFill,PiSuitcaseFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { BsBuildingsFill, BsFillBuildingFill , BsYoutube} from "react-icons/bs";
import data from "../data/data.json"
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";

import styles from '../styles/Footer.module.css'

export default function Footer() {
    return(
        <footer className={styles.secFooter}>
            <section>
                <div className={styles.containerFloat}>
                    <div>
                        <p>newsletter</p>
                        <h3>Fique por dentro das novidades</h3>
                    </div>
                    <form action="">
                        <div>
                            <label htmlFor="nome">Seu nome</label>
                            <div>
                                <FaUser/>
                                <input type="text" name="nome" placeholder="Ex: João Paulo"/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email">Seu melhor e-mail</label>
                            <div>
                                <MdEmail/>
                                <input type="email" name="email" placeholder="email@gmail.com"/>
                            </div>
                        </div>
                        <Button><RiVerifiedBadgeFill/>Assinar</Button>
                    </form>
                </div>

                <div className={styles.containerMain}>
                    <div className={styles.firstDiv}>
                        <img src={logo} alt="" />
                        <p>O MundoMaker é uma Empresa de Inovação e Tecnologia que busca despertar os potenciais criativos e empreendedores de todas as crianças, jovens e adultos.</p>
                        <nav>
                            <ul>
                                <li><PiWhatsappLogoFill/></li>
                                <li><RiInstagramFill/></li>
                                <li><FaLinkedin/></li>
                                <li><BsYoutube/></li>
                                <li><BsYoutube/></li>
                                <li><CiFacebook/></li>
                                <li><PiSuitcaseFill/> Vagas</li>
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.secDiv}>
                        <div>
                            <div className={styles.especific}>
                                <BsBuildingsFill className={styles.secDivG}/>
                                <p>Matriz</p>
                            </div>
                            <h4>Av. Governador Danilo Matos Areosa, 1170 | Distrito Industrial I, Manaus-AM</h4>
                            
                        </div>
                        <div>
                            <div className={styles.especific}>
                                <BsFillBuildingFill className={styles.secDivG}/>
                                <p>Filial</p>
                            </div>
                            <h4>Rua Aspicuelta, 345 | Vila Madalena, São Paulo-SP</h4>
                        </div>
                    </div>
                    <hr  className={styles.hr}/>
                    <div className={styles.last}>
                        <div className={styles.listFooter}>
                            {data.footerListas.map(item =>(
                                <ul key={item.id}>
                                    <p>{item.titulo}</p>
                                    {item.lista.map((itens,index) =>(
                                        <li>{itens}</li>
                                    ))}
                                </ul>
                            ))}
                        </div>

                        <div className={styles.footerBlog}>
                            {
                                data.footer_sep.map(item =>(
                                    <ul key={item.id}>
                                        <p>{item.titulo}</p>
                                        {item.lista.map((itens,index) =>(
                                        <li>{itens}</li>
                                    ))}
                                    </ul>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <p>Copyright © 2025 MundoMaker. Todos os direitos reservados.</p>
                    <p>
                        Desenvolvido por Bayerl Studio
                    </p>
                </div>
            </section>
        </footer>
    )
}