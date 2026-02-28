import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import Marcas from "../ux/Marcas";
import Video from "../ux/Video"
import CardContainer from "../ux/CardContainer";
import Ebook from "../ux/Ebook"
import { PiStarFourFill,PiBooksFill} from "react-icons/pi";
import { FaLightbulb } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import escola1 from "../../assets/images/escola1.png";
import escola2 from "../../assets/images/escola2.png";
import escola3 from "../../assets/images/escola3.png";
import SectionGreen from "../ux/SectionGreen"
import Depoimentos from "../ux/Depoimentos";
import Artigos from "../ux/Artigos";
import style from '../../styles/Escolas.module.css'
import SectionTruck from "../ux/SectionTruck";
import Form from "../ux/Form";
import Input from "../ux/Input";
import { FaUserAlt,FaBuilding } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { ImBriefcase } from "react-icons/im";
import { GiBrazilFlag } from "react-icons/gi";

import data from '../../data/data.json'



export default function Escolas() {
  const estados = ["São Paulo", "Rio de Janeiro", "Minas Gerais"];
  const cidades = ["Cidade 1", "Cidade 2", "Cidade 3"];
  const [selecionado, setSelecionado ] = useState(1)

  const [form, setForm] = useState({
  nome: "",
  cargo: "",
  escola: "",
  setor: "privada",
  estado: "",
  cidade: "",
  celular: "",
  email: "",
  contato: "whatsapp",
  mensagem: ""
})
  const cards =[
    {
    id:1,
    icon: <PiStarFourFill/>,
    titulo:"Conexão com a realidade",
    texto:"Proposta de atividades conectadas com a realidade."
  },
  {
    id:2,
    icon: <FaLightbulb/>,
    titulo:"Criatividade e inovação",
    texto:"Desperte o potencial criativo e empreendedor do estudante."
  },
    {
    id:3,
    icon: <PiBooksFill/>,
    titulo:"Insumos",
    texto:"Não precisa se preocupar, todos os insumos necessários já estão inclusos."
  },
    {
    id:4,
    icon: <MdPeople/>,
    titulo:"Para todas as idades",
    texto:"Projetos pensados desde a Educação Infantil até o novo Ensino Médio."
  }
  ]
  const atividades =[
    {
        id:1,
        img:escola1,
        titulo:"MakerLab",
        text:"Integrado a grade curricular das escolas, alinhado com a BNCC. Os professores participam da formação de educadores do MundoMaker, recebem material de apoio impresso, vídeos tutoriais, além do acompanhamento pedagógico mensal."
    },
      {
        id:2,
        img:escola2,
        titulo:"Inventura",
        text:"Programa interdisciplinar, com livros de atividades e plataforma online de acompanhamento para alunos do 4º ao 9º ano do Ensino Fundamental 1 e 2. Inspira a criatividade digital através de fundamentos da programação."
    }
    ,
      {
        id:3,
        img:escola3,
        titulo:"TechLab Box",
        text:"Programa extracurricular para as escolas, onde o aluno recebe mensalmente um projeto idealizado para sua faixa etária, e constrói, customiza e brinca com ele."
    }
  ]
  function handleChange(e) {
  const { name, value } = e.target

  setForm(prev => ({
    ...prev,
    [name]: value
  }))
}
  return (
    <section className={style.escolas}>
      <div className={style.forEscolas}>
        <p className={style.forSpan}>Para escolas</p>
        <h1>Revolucione a sua escola</h1>
        <p className={style.textEscolas}>
          Tenha o sistema MundoMaker de aprendizagem na grade curricular da
          sua escola – o MakerLab, alinhado totalmente à BNCC. Conheça também
          as atividades Extracurriculares, o Inventura e a Consultoria para o
          Espaço Maker.
        </p>
      </div>
      <SectionTruck className={style.containerForm}>
        <Form textButton={'Enviar'}>
          <div className={style.casal}>
            <Input className={style.inputForm} name={"nome"} label={"Nome"} type={"text"} placeholder={"Ex: João Paulo"} icon={<FaUserAlt/>}/>
            <Input  className={style.inputForm} name={"cargo"} label={"Cargo"} type={"text"} placeholder={"Ex: Diretor(a)"} icon={<ImBriefcase/>}/>
          </div>
          <div className={style.casal}>
            <Input className={style.inputForm} name={'escola'} label={"Nome da Escola"} type={"text"} placeholder={"Ex: E.E Qualquer"} icon={<FaBuilding/>}/>
            <Input className={style.inputRadio} name="setor" label="Setor" type="radio"
            value={form.setor}
            onChange={handleChange}
            options={[
                { label: "Público", value: "publico" },
                { label: "Privada", value: "privada" }
              ]}
            />
          </div>
           <Input
           className={style.inputOption}
              name="estado"
              label="Estado"
              type="select"
              value={form.estado}
              onChange={handleChange}
              options={estados.map((estado) => ({
                label: estado,
                value: estado
              }))}
            />

        <Input
        className={style.inputOption}
          name="cidade"
          label="Cidade"
          type="select"
          value={form.cidade}
          onChange={handleChange}
          options={cidades.map((cidade) => ({
            label: cidade,
            value: cidade
          }))}
        />
        <div className={style.casal}>
          <Input
          className={style.inputForm}
            name="celular"
            label="Celular"
            icon={<GiBrazilFlag/>}
            type="tel"
            placeholder="Ex: (11) 99999-9999"
            value={form.celular}
            onChange={handleChange}
          />
          
                <Input
                className={style.inputForm}
          name="email"
          label="Email"
          icon={<MdOutlineMailOutline/>}
          type="email"
          placeholder="Ex: email@escola.com"
          value={form.email}
          onChange={handleChange}
                />
        </div>
      <Input
      className={style.inputRadio}
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
    className={style.inputForm}
  name="mensagem"
  label="Mensagem"
  type="text"
  placeholder="Do que você precisa?"
  value={form.mensagem}
  onChange={handleChange}
/>













        </Form>
      </SectionTruck>
      <Marcas primeiraLista={true} className={style.marcasEscolas}/>
      <Video paragrafo={"video"} texto={"Assista o vídeo e conheça um pouco mais do Mundo Maker nas Escolas:"}/>
    <CardContainer className={style.CardContainerOne} text={"Competências"} titulo={"Por que ter o MundoMaker na sua escola?"}>
        {
            cards.map(item =>(
                <div key={item.id} onClick={()=> setSelecionado(item.id)} className={`${style.contItem} ${selecionado === item.id && style.isSelecionado}`}>
                   <span>{item.icon}</span>
                   <h4>{item.titulo}</h4>
                   <p>{item.texto}</p>
                </div>
            ))
        }
    </CardContainer>

    <Ebook/>

    <CardContainer text={"Atividades"} titulo={"Programas MundoMaker para Escolas"}  isSecond={true}>
        {
            atividades.map(item =>(
                <div key={item.id} className={style.containerAtividades}>
                    <img src={item.img} alt="" />
                    <div>
                      <h4>{item.titulo}</h4>
                      <p>{item.text}</p>
                    </div>
                </div>
            ))
        }
    </CardContainer>




    <SectionGreen  data={data.sectionGreen}/>
    <Depoimentos/>
    <Artigos/>
    </section>
  );
}