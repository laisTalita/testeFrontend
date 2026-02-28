import { useState } from 'react'
import { FaUserAlt, FaBuilding } from 'react-icons/fa'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { GiBrazilFlag } from 'react-icons/gi'
import { ImBriefcase } from 'react-icons/im'
import { MdOutlineMailOutline } from 'react-icons/md'

import img from '../../assets/images/empresas/empresas.png'
import image from '../../assets/images/empresas/empresa_img.svg'

import Marcas from '../ux/Marcas'
import Video from '../ux/Video'
import CardContainer from '../ux/CardContainer'
import SectionGreen from '../ux/SectionGreen'
import ContainerBasic from '../ux/ContainerBasic'
import SectionTruck from '../ux/SectionTruck'
import ContainerF from '../ux/ContainerF'
import Form from '../../components/ux/Form'
import Input from '../../components/ux/Input'

import data from '../../data/data.json'
import styles from '../../styles/Empresas.module.css'
export default function Empresas(){
    

    const itensBlue =[
        {
            id:1,
            number : 90,
            text: "Empresas impactadas"
        },
         {
            id:2,
            number : 7000,
            text: "Colaboradores impactadas"
        },
        
         {
            id:3,
            number :250 ,
            text: "WORKSHOPS MAKER REALIZADOS"
        },
    ]

       const [form, setForm] = useState({
        nome: "",
        nomeEmpresa: "",
        cargo: "",
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
    return(
        <section className={styles.empresas}>
            <div className={styles.containerEmpresas}>
                <div className={styles.divImage}></div>
                <div className={styles.divContainer}>
                    <div>
                        <span>Para empresas</span>
                        <h1>a sua empresa precisa</h1>
                        <p>Leve a Cultura Maker para dentro da sua empresa! Conheça as atividades “mão na massa” do MundoMaker desenvolvidas especialmente para o setor corporativo.</p>
                    </div>
                </div>
            </div>
            <Marcas primeiraLista={false}/>

            <ContainerF text={"O MundoMaker oferece oficinas voltadas ao mundo corporativo que podem ser usadas para trabalhar habilidades como criatividade, empreendedorismo dentro da empresa, trabalho em equipe, team building, inovação, planejamento, resolução de problemas complexos – ou mesmo como uma atividade divertida para fortalecimento do relacionamento dentro de times.Trabalhamos junto com nossos clientes para propor experiências que melhor atendam às necessidades da empresa. Podemos criar programas customizados, nos quais o produto construído pelos participantes tenha relação com a empresa, com o objetivo da interação ou que sejam disruptivos e fora da caixa."} button={"Fale conosco"} titulo={"O que oferecemos nos workshops para Empresas?"} span={"Competências"} part={true} className={styles.classeContainer} textButton={"Fale conosco"}>
                <img src={image} alt=""  className={styles.imagContent}/>
             </ContainerF>
             <div className={styles.divVideo}>
                 <Video paragrafo={"Vídeo"} texto={"Veja mais"}/>
             </div>

             <CardContainer text={"Atividades"} titulo={"Programas MundoMaker para empresas"} isSecond={true} className={styles.marginDiv}>
                {
                    data.empresas.map(item =>(
                        <div key={item.id} className={styles.fakesImages}>
                            <img src={img} alt="" />
                            <div className={styles.containersTexto}>
                                <h4>{item.titulo}</h4>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))
                }

            </CardContainer>

            <div className={styles.marginDiv}>
                <SectionGreen data={itensBlue} isBlue={true} />
            </div>

            <ContainerBasic text={"Galeria"} titulo={"só falta a sua empresa!"} blue={true} className={styles.containerDivs}>
                <div className={styles.galeriDiv}>
                </div>
                <div className={styles.galeriDiv}> 
                </div>
                <div className={styles.galeriDiv}></div>
                <div className={styles.galeriDiv}>
                </div>
                <div className={styles.galeriDiv}> 
                </div>
                <div className={styles.galeriDiv}></div>
            </ContainerBasic>

            <SectionTruck className={styles.contTruck} truck={true}>
              <Form
                className={styles.formFamilias}
                onSubmit={handleSubmit}
                textButton={
                    <>
                    Enviar <FaArrowTrendUp />
                    </>
                }
                isBlue={true}>

  <Input
    className={styles.inputForm}
    name="nome"
    label="Nome completo"
    type="text"
    placeholder="Ex: João Paulo"
    icon={<FaUserAlt />}
    value={form.nome}
    onChange={handleChange}
  />

  <Input
    className={styles.inputForm}
    name="nomeEmpresa"
    label="Nome da empresa"
    type="text"
    placeholder="Ex: Empresa qualquer LTDA"
    icon={<FaBuilding />}
    value={form.nomeEmpresa}
    onChange={handleChange}
  />

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
    className={styles.inputForm}
    name="cargo"
    label="Qual sua profissão?"
    type="text"
    placeholder="Ex: Diretor(a)"
    icon={<ImBriefcase />}
    value={form.cargo}
    onChange={handleChange}
  />

  <Input
    className={styles.inputOption}
    name="programa"
    label="Programa"
    type="select"
    value={form.programa}
    onChange={handleChange}
    options={[
      { label: "Workshop Corporativo", value: "workshop" },
      { label: "Team Building", value: "team" },
      { label: "Programa Customizado", value: "custom" }
    ]}
  />

                </Form>
          </SectionTruck>
        </section>
    )
}