import { useState } from "react";
import Button from "../ux/Button"
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



export default function Escolas() {
  const estados = ["São Paulo", "Rio de Janeiro", "Minas Gerais"];
  const cidades = ["Cidade 1", "Cidade 2", "Cidade 3"];


  const [estadoSelecionado, setEstadoSelecionado] = useState("");
  const [cidadeSelecionada, setCidadeSelecionada] = useState("");

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
  ,
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
  return (
    <section>
      <div>
        <p>Para escolas</p>
        <h1>Revolucione a sua escola</h1>
        <p>
          Tenha o sistema MundoMaker de aprendizagem na grade curricular da
          sua escola – o MakerLab, alinhado totalmente à BNCC. Conheça também
          as atividades Extracurriculares, o Inventura e a Consultoria para o
          Espaço Maker.
        </p>
      </div>
      <div>
        <form>
          <div>
            <label htmlFor="nome">Nome</label>
            <input type="text" placeholder="Ex: João Paulo" />
          </div>
          <div>
            <label htmlFor="cargo">Cargo</label>
            <input type="text" placeholder="Ex: Diretor(a)" />
          </div>
          <div>
            <label htmlFor="escola">Nome da Escola</label>
            <input type="text" placeholder="Ex: E.E Qualquer" />
          </div>
          <div>
            <label htmlFor="setor">Setor</label>
            <div>
              <input type="radio" id="setor1" name="setor" value="publico" />
              <label htmlFor="setor1">Público</label>

              <input type="radio" id="setor2" name="setor" value="privada" />
              <label htmlFor="setor2">Privada</label>
            </div>
          </div>
          <div>
            <label htmlFor="estado">Estado:</label>
            <select
              id="estado"
              value={estadoSelecionado}
              onChange={(e) => setEstadoSelecionado(e.target.value)}
            >
              <option value="">Selecione...</option>
              {estados.map((estado, index) => (
                <option key={index} value={estado}>
                  {estado}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="cidade">Cidade:</label>
            <select
              id="cidade"
              value={cidadeSelecionada}
              onChange={(e) => setCidadeSelecionada(e.target.value)}
            >
              <option value="">Selecione...</option>
              {cidades.map((cidade, index) => (
                <option key={index} value={cidade}>
                  {cidade}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="celular">Celular</label>
            <input
              type="tel"
              placeholder="Ex: (11) 99999-9999"            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Ex: email@escola.com"
            />
          </div>

            <div>
            <label htmlFor="setor">como devemos te contatar?
</label>
            <div>
              <input type="radio" id="setor1" name="setor" value="publico" />
              <label htmlFor="setor1">WhatsApp</label>

              <input type="radio" id="setor2" name="setor" value="privada" />
              <label htmlFor="setor2">Celular</label>
              
              <input type="radio" id="setor2" name="setor" value="privada" />
              <label htmlFor="setor2">Email</label>
            </div>
          </div>

          <label htmlFor="mansagem">Mensagem</label>
          <input type="text" placeholder="Do que você precisa?" />

          <Button>Enviar<MdArrowOutward/></Button>

        </form>
      </div>
      <Marcas primeiraLista={true}/>
      <Video paragrafo={"video"} texto={"Assista o vídeo e conheça um pouco mais do Mundo Maker nas Escolas:"}/>
      <CardContainer text={"Competências"} titulo={"Por que ter o MundoMaker na sua escola?"}>
        {
            cards.map(item =>(
                <div key={item.id}>
                   {item.icon}
                   <p>{item.titulo}</p>
                   <p>{item.texto}</p>
                </div>
            ))
        }
    </CardContainer>
    <Ebook/>

    <CardContainer text={"Atividades"}  titulo={"Programas MundoMaker para Escolas"}>
        {
            atividades.map(item =>(
                <div key={item.id}>
                    <img src={item.img} alt="" />
                    <h4>{item.titulo}</h4>
                    <p>{item.text}</p>
                </div>
            ))
        }
    </CardContainer>
    <SectionGreen/>
    <Depoimentos/>
    <Artigos/>
    </section>
  );
}