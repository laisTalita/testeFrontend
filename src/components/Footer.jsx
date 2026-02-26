import Button from "./ux/Button";
import { RiVerifiedBadgeFill ,RiInstagramFill } from "react-icons/ri";
import logo from "../assets/logos/Logo.svg"
import { PiWhatsappLogoFill,PiSuitcaseFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { BsBuildingsFill, BsFillBuildingFill , BsYoutube} from "react-icons/bs";
import data from "../data/data.json"

export default function Footer() {
    return(
        <footer>
            <section>
                <section>
                    <div>
                        <p>newsletter</p>
                        <h2>Fique por dentro das novidades</h2>
                    </div>
                    <form action="">
                        <label htmlFor="nome">Seu nome</label>
                        <input type="text" name="nome" placeholder="Ex: João Paulo"/>
                        <label htmlFor="email">Seu melhor e-mail</label>
                        <input type="email" name="email" placeholder="email@gmail.com"/>
                        <Button><RiVerifiedBadgeFill/>Assinar</Button>
                    </form>
                </section>

                <div>
                    <div>
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
                    <div>
                        <div>
                            <BsBuildingsFill/>
                            <p>Matriz</p>
                            <h4>Av. Governador Danilo Matos Areosa, 1170 | Distrito Industrial I, Manaus-AM</h4>
                        </div>
                        <div>
                            <div>
                            <BsFillBuildingFill/>
                            <p>Filial</p>
                            <h4>Rua Aspicuelta, 345 | Vila Madalena, São Paulo-SP</h4>
                        </div>
                        </div>

                    </div>
                    <hr />
                    <div>
                        {data.footerListas.map(item =>(
                            <ul key={item.id}>
                                <p>{item.titulo}</p>
                                {item.lista.map((itens,index) =>(
                                    <li>{itens}</li>
                                ))}
                            </ul>
                        ))}
                        {
                            data.footer_sep.map(item =>(
                                <ul key={item.id}>
                                    <p>{item.titule}</p>
                                    {item.lista.map((itens,index) =>(
                                    <li>{itens}</li>
                                ))}

                                </ul>
                            ))
                        }
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