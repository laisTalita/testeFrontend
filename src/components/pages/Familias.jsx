import livro1 from '../../assets/images/familia/livro1.png'
import livro2 from '../../assets/images/familia/livro2.png'
import livro3 from '../../assets/images/familia/livro3.png'
import livro4 from '../../assets/images/familia/livro4.png'
import { IoIosPeople } from "react-icons/io";
import { FaMapLocationDot, FaCalendarCheck } from "react-icons/fa6";
import { TbClockHour3Filled, TbClockHour4 } from "react-icons/tb";
import { BsCalendar2Heart } from "react-icons/bs";

import ContainerF from '../ux/ContainerF'
import data from '../../data/data.json'
import SectionOrange from '../ux/SectionOrange'
import SectionTruck from '../ux/SectionTruck'

import img1 from '../../assets/images/familia/image.svg'
import img2 from '../../assets/images/familia/image4.svg'
import TextImg from '../ux/TextImg';
import festa from '../../assets/images/familia/festa.svg'
import gif from '../../assets/images/familia/gif_festa.svg'
import CardContainer from '../ux/CardContainer';
import { FaCube,FaRegLightbulb,FaGift} from "react-icons/fa";
import { MdCake } from "react-icons/md";


export default function Familias(){
    const livros = [livro1, livro2, livro3, livro4];
    const imagensFamilias = { 1: img1, 2: img2 };

    const adicionais = {
        1: [
            { icon: <IoIosPeople />, text: "Para crianças, jovens e adultos, as oficinas avulsas do MundoMaker é dividido por grupos de mesma faixa etária e/ou maturidade e colocamos o desafio do dia. Junto com mediadores especializados, com os materiais e ferramentas disponíveis, os participantes terão todos os recursos disponíveis para fazer o projeto proposto." },
            { icon: <FaCalendarCheck />, label: "Dias disponíveis", text: "Verificar disponibilidade" },
            { icon: <TbClockHour3Filled />, label: "Duração", text: "2 a 3 horas" },
            { icon: <BsCalendar2Heart />, text: "Temos também oficinas sazonais em datas comemorativas!" }
        ],
        2: [
            { icon: <IoIosPeople />, text: "Trilhas de aprendizagem para cada faixa etária, com atividades que trabalham cada estágio do conhecimento e complexidade (iniciação, desenvolvimento e aprofundamento)." },
            { icon: <FaMapLocationDot />, label: "Local", text: "Rua Aspicuelta, 345 | Vila Madalena" },
            { icon: <FaCalendarCheck />, label: "Dias disponíveis", text: "De segunda à sexta" },
            { icon: <TbClockHour3Filled />, label: "Duração", text: "1h40" },
            { icon: <TbClockHour4 />, label: "Horários", list: ["10h00 - 11h40", "14h20 - 16h00", "16h20 -18h00"] }
        ]
    };
     const itensOrange =[
        {
            id:1,
            number : 3000,
            text: "Projetos concluídos"
        },
         {
            id:2,
            number : 3000,
            text: "Crianças impactadas"
        },
        
         {
            id:3,
            number : "10 Oficinas de férias" ,
            text: "Realizadas nos meses de junho, julho, dezembro e janeiro."
        },
    ]
    const cards =[
    {
    id:1,
    icon: <FaCube/>,
    texto:"Na hora da festa, vamos oferecer o projeto escolhido pelo aniversariante, mais todos os insumos para a construção do projeto."
  },
  {
    id:2,
    icon: <MdCake/>,
    texto:"As festas têm a duração de 2h30 divididas da seguinte forma: 2h00 para construção e customização do projeto, e 30 minutos para o parabéns."
  },
    {
    id:3,
    icon: <FaRegLightbulb/>,
    texto:"Para ajudar nesta construção, contamos com os mediadores do MundoMaker que possuem conhecimento técnico para fazer com que as criações de cada um fiquem incríveis."
  },
    {
    id:4,
    icon: <FaGift/>,
    texto:"Cada um dos participantes leva o seu projeto para casa que será a lembrança desse momento tão especial!"
  }

    ]

    return (
        <section>
            <div>
                <p>Para famílias</p>
                <h1>Sua família merece!</h1>
                <p>O MundoMaker oferece atividades mão na massa e de programação através de nossas oficinas mensais, semestrais e anuais. Conheça nossos programas e aprenda brincando!</p>
            </div>
            <div>
                 <div>
                    <p>Programas</p>
                    <h2>Como o MundoMaker pode ajudar no desenvolvimento do seu filho?</h2>
                </div>
                {livros.map((item, index) => (
                    <img key={index} src={item} alt="" />
                ))}
            </div>
            <div>       
                {data.familias.map(item => (
                    <ContainerF 
                        key={item.id} 
                        img={imagensFamilias[item.img]}  
                        text={item.texto} 
                        textButton={item.button}
                    >
                        {adicionais[item.id]?.map((a, i) => (
                            <div key={i}>
                                {a.icon}
                                {a.label && <span>{a.label}:</span>}
                                {a.text && <p>{a.text}</p>}
                                {a.list && (
                                    <ul>
                                        {a.list.map((li, idx) => <li key={idx}>{li}</li>)}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </ContainerF>
                ))}
            </div>
            <TextImg
             text={"Aqui, as festas são chamadas de oficinas de aniversário por terem um caráter único e inovador, onde o aniversariante e seus convidados comemoram de um jeito diferente de todas as festas que já participaram: exercendo a criatividade em um espaço feito para as crianças colocarem a mão na massa e se divertirem com os amigos. Usando engenharia, design, arte, programação e eletrônica, as crianças vão experimentar ferramentas digitais (a impressora 3D e cortadora a laser), ferramentas manuais e uma série de materiais para construir um projeto. Com esses elementos à disposição, eles vão descobrir um novo mundo, cheio de possibilidades."} button={"Fale conosco"} img={gif}>
                <img src={festa} alt="" />
            </TextImg>
            <CardContainer text={"Oficinas"} titulo={"Como fazemos as oficinas de aniversário?"}>
                  {
                    cards.map(item =>(
                        <div key={item.id}>
                        {item.icon}
                        <p>{item.texto}</p>
                        </div>
                    ))
                }
            </CardContainer>
            <SectionOrange itens={itensOrange}/>
            <SectionTruck/>
        </section>
    )
}