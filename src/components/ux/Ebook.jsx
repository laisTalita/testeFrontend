import Button from "./Button";
import { AiOutlineDownload } from "react-icons/ai";
import ebook from "../../assets/images/ebook.svg";
import styles from "../../styles/Ebook.module.css"

export default function Ebook() {
    return(
        <section className={styles.secEbook}>
            <div className={styles.secImg}>
                <img src={ebook} alt="baixar Ebook"/>
            </div>
            <div className={styles.containerEbook}>
                <p className={styles.containerTitle}>Ebook</p>
                <h4>Quer cativar ainda mais seus alunos e implementar um ensino mão na massa?</h4>
                <p className={styles.textCont}>Tradicionalmente, os alunos são preparados para resolver os
                    problemas no papel, mas quando os problemas são trazidos
                    para o mundo real, onde os elementos se materializam, eles
                    têm dificuldades para transpor o conhecimento e resolvê-los.
                    Dentro dos programas do MundoMaker, o aluno aprende a
                    realizar projetos por etapas, organizando seus pensamentos e
                    trazendo suas ideias para a realidade, tornando-o ainda mais
                    preparado para lidar e compreender o mundo a sua volta.
                    Preparamos este material rico para te ajudar a implementar,
                    com sucesso, a ﻿Cultura Maker na sua escola!</p>
                <Button><AiOutlineDownload style={{fontSize:"1.5em"}}/> Baixar ebook</Button>
            </div>
        </section>
    )
}