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
import SectionTruck from '../ux/SectionTruck'

import img1 from '../../assets/images/familia/image.svg'
import img2 from '../../assets/images/familia/image4.svg'
import festa from '../../assets/images/familia/festa.svg'
import gif from '../../assets/images/familia/gif_festa.svg'
import CardContainer from '../ux/CardContainer';
import { FaCube,FaRegLightbulb,FaGift} from "react-icons/fa";
import { MdCake } from "react-icons/md";
import styles from '../../styles/Familias.module.css'
import SectionGreen from '../ux/SectionGreen';
import Form from  '../ux/Form';
import Input from '../ux/Input';
import { FaUserAlt } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { ImBriefcase } from "react-icons/im";
import { IoIosHammer } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { useState } from "react";
import { GiBrazilFlag } from "react-icons/gi";
import { MdOutlineMailOutline } from "react-icons/md";


export default function Familias(){
    const livros = [livro1, livro2, livro3, livro4];
    const imagensFamilias = { 1: img1, 2: img2 };
    const adicionais = {
        1: [
            { icon: <IoIosPeople />, text: "Para crianças, jovens e adultos, as oficinas avulsas do MundoMaker é dividido por grupos de mesma faixa etária e/ou maturidade e colocamos o desafio do dia. Junto com mediadores especializados, com os materiais e ferramentas disponíveis, os participantes terão todos os recursos disponíveis para fazer o projeto proposto." },
            {infos: [
            { icon: <FaCalendarCheck />, label: "Dias disponíveis", text: "Verificar disponibilidade" },
            { icon: <TbClockHour3Filled />, label: "Duração", text: "2 a 3 horas" },
            { icon: <BsCalendar2Heart />, text: "Temos também oficinas sazonais em datas comemorativas!" }]}
        ],
        2: [
            { icon: <IoIosPeople />, text: "Trilhas de aprendizagem para cada faixa etária, com atividades que trabalham cada estágio do conhecimento e complexidade (iniciação, desenvolvimento e aprofundamento)." },
           { infos:[{ icon: <FaMapLocationDot />, label: "Local", text: "Rua Aspicuelta, 345 | Vila Madalena" },
            { icon: <FaCalendarCheck />, label: "Dias disponíveis", text: "De segunda à sexta" },
            { icon: <TbClockHour3Filled />, label: "Duração", text: "1h40" },
            { icon: <TbClockHour4 />, label: "Horários", list: ["10h00 -11h40", "14h20 -16h00", "16h20 -18h00"] }]}
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
      const [form, setForm] = useState({
    nome: "",
    cargo: "",
    estudante: "",
    nascimento: "",
    celular: "",
    email: "",
    contato: "",
    programa: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Dados enviados:", form);
  }

    return (
        <section className={styles.familiaSection}>
            <div className={styles.familiaDiv}>
                <div>
                    <p className={styles.tituloP}>Para famílias</p>
                    <h1>Sua família merece!</h1>
                    <p className={styles.mundoM}>O MundoMaker oferece atividades mão na massa e de programação através de nossas oficinas mensais, semestrais e anuais. Conheça nossos programas e aprenda brincando!</p>
                </div>
            </div>
            <div className={styles.programas}>
                 <div className={styles.prog1}>
                    <p>Programas</p>
                    <h2>Como o MundoMaker pode ajudar no desenvolvimento do seu filho?</h2>
                </div>
                <div className={styles.prog2}>
                    {livros.map((item, index) => (
                        <img key={index} src={item} alt="" />
                    ))}
                </div>
            </div>
            <div className={styles.marker}>       
                {data.familias.map(item => (
                    <ContainerF 
                        key={item.id} 
                        img={imagensFamilias[item.img]}  
                        text={item.texto} 
                         className={item.id === 1 ? styles.reverse : ""}
                        textButton={item.button}>
                    {adicionais[item.id] && (

                    <div className={`${styles.blocos} ${item.id === 1 ? styles.blue : styles.orange}`}>
                        <div className={styles.blocoPrincipal}>
                            <span>{adicionais[item.id][0].icon}</span>
                            <p>{adicionais[item.id][0].text}</p>
                        </div>
                        <div className={styles.blocoInfos}>
                        {adicionais[item.id][1]?.infos?.map((info, i) => (
                            <div key={i} className={styles.infoItem}>
                               <div className={styles.containerInfos}>
                                   <span>{info.icon}</span>
                                    {info.label && 
                                    <p className={styles.labels}>{info.label}:</p>}
                               </div>
                                {info.text && 
                                <p className={styles.info}>{info.text}</p>}

                                {info.list && (
                                <ul className={styles.infoList}>
                                    {info.list.map((li, idx) => (
                                    <li key={idx}>{li}</li>
                                    ))}
                                </ul>
                                )}
                            </div>
                        ))}</div>
                    </div>
                    )}
                    </ContainerF>
                ))}
            </div>
            <ContainerF
             text={"Aqui, as festas são chamadas de oficinas de aniversário por terem um caráter único e inovador, onde o aniversariante e seus convidados comemoram de um jeito diferente de todas as festas que já participaram: exercendo a criatividade em um espaço feito para as crianças colocarem a mão na massa e se divertirem com os amigos. Usando engenharia, design, arte, programação e eletrônica, as crianças vão experimentar ferramentas digitais (a impressora 3D e cortadora a laser), ferramentas manuais e uma série de materiais para construir um projeto. Com esses elementos à disposição, eles vão descobrir um novo mundo, cheio de possibilidades."} textButton={"Fale conosco"} img={festa}>
                <img src={gif} alt="" />
            </ContainerF>
            <CardContainer text={"Oficinas"} titulo={"Como fazemos as oficinas de aniversário?"} className={styles.oficinas} isSecond={true}>
                {
                    cards.map(item =>(
                        <div key={item.id} className={styles.divOfc} >
                            <span>{item.icon}</span>
                            <p>{item.texto}</p>
                        </div>
                    ))
                }
            </CardContainer>

            <SectionGreen data={itensOrange} isOrange={true}/>

             <SectionTruck className={styles.containerTruck} truck={true}>
            <Form
              className={styles.formFamilias}
              onSubmit={handleSubmit}
              textButton={
                <>
                  Enviar <FaArrowTrendUp />
                </>
              }
              isOrange={true}
            >

              <Input
                className={styles.inputForm}
                name="nome"
                label="Nome do responsável"
                type="text"
                placeholder="Ex: João Paulo"
                icon={<FaUserAlt />}
                value={form.nome}
                onChange={handleChange}
              />

              <Input
                className={styles.inputForm}
                name="cargo"
                label="Qual sua profissão?"
                type="text"
                placeholder="Ex: Diretor(a)"
                icon={<ImBriefcase />}
                value={form.cargo}
                onChange={handleChange}
              />

              <div className={styles.casal}>
                <Input
                  className={styles.inputForm}
                  name="estudante"
                  label="Nome do Maker"
                  type="text"
                  placeholder="Ex: João Paulo Jr."
                  icon={<IoIosHammer />}
                  value={form.estudante}
                  onChange={handleChange}
                />

                <Input
                  className={styles.inputForm}
                  name="nascimento"
                  label="Data de nascimento"
                  type="date"
                  icon={<CiCalendar />}
                  value={form.nascimento}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.casal}>
                <Input
                  className={styles.inputForm}
                  name="celular"
                  label="Celular"
                  icon={<GiBrazilFlag />}
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={form.celular}
                  onChange={handleChange}
                />

                <Input
                  className={styles.inputForm}
                  name="email"
                  label="Email"
                  icon={<MdOutlineMailOutline />}
                  type="email"
                  placeholder="email@exemplo.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <Input
                className={styles.inputRadio}
                name="contato"
                label="Como devemos te contatar?"
                type="radio"
                value={form.contato}
                onChange={handleChange}
                options={[
                  { label: "WhatsApp", value: "whatsapp" },
                  { label: "Celular", value: "celular" },
                  { label: "Email", value: "email" }
                ]}
              />

              <Input
                className={styles.inputOption}
                name="programa"
                label="Programa"
                type="select"
                value={form.programa}
                onChange={handleChange}
                options={[
                  { label: "Oficina Avulsa", value: "oficina" },
                  { label: "Curso Regular", value: "curso" },
                  { label: "Oficina de Aniversário", value: "aniversario" }
                ]}
              />

            </Form>
          </SectionTruck>
        </section>
    )
}


















