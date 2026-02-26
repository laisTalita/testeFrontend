import img from '../../assets/images/empresas/empresas.png'
import Marcas from '../ux/Marcas'
import TextImg from '../ux/TextImg'
import image from '../../assets/images/empresas/empresa_img.svg'
import Video from  '../ux/Video'
import CardContainer from '../ux/CardContainer'
import data from '../../data/data.json'
import SectionOrange from '../ux/SectionOrange'
import ContainerBasic from '../ux/ContainerBasic'
import SectionTruck from '../ux/SectionTruck'

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
    return(
        <section>
            <div>
                <img src={img} alt="" />
                <div>
                    <p>Para empresas</p>
                    <h1>a sua empresa precisa</h1>
                    <p>Leve a Cultura Maker para dentro da sua empresa! Conheça as atividades “mão na massa” do MundoMaker desenvolvidas especialmente para o setor corporativo.</p>
                </div>
            </div>
            <Marcas primeiraLista={false}/>
            <TextImg text={"O MundoMaker oferece oficinas voltadas ao mundo corporativo que podem ser usadas para trabalhar habilidades como criatividade, empreendedorismo dentro da empresa, trabalho em equipe, team building, inovação, planejamento, resolução de problemas complexos – ou mesmo como uma atividade divertida para fortalecimento do relacionamento dentro de times.Trabalhamos junto com nossos clientes para propor experiências que melhor atendam às necessidades da empresa. Podemos criar programas customizados, nos quais o produto construído pelos participantes tenha relação com a empresa, com o objetivo da interação ou que sejam disruptivos e fora da caixa."} button={"Fale conosco"} img={image}>
                <div>
                    <p>Competências</p>
                    <h2>O que oferecemos nos workshops para Empresas?</h2>
                </div>
                
             </TextImg>
             <Video paragrafo={"Vídeo"} texto={"Veja mais"}/>
             <CardContainer text={"Atividades"} titulo={"Programas MundoMaker para empresas"}>
                {
                    data.empresas.map(item =>(
                        <div key={item.id}>
                            <h3>{item.titulo}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))
                }

            </CardContainer>
            <SectionOrange itens={itensBlue}/>

            <ContainerBasic text={"Galeria"} titulo={"só falta a sua empresa!"} blue={true}>
                <div>
                    c1
                </div>
                <div>
                    c2
                </div>
                <div>c3</div>
                </ContainerBasic>
            <SectionTruck/>
        </section>
    )
}