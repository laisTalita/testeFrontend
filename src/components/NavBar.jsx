import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from '../assets/logos/Logo.svg';
import DarkLogo from '../assets/logos/LogoBlack.svg';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

import styles from '../styles/NavBar.module.css';

export default function NavBar() {
  const location = useLocation();
  const [logo, setLogo] = useState(Logo);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const links = [
    { nome: "início", cor: "white" },
    { nome: "escolas", cor: "#1CAB00" },
    { nome: "famílias", cor: "#CE8300" },
    { nome: "empresas", cor: "#00A1C5" },
    { nome: "social", cor: "#006EFF" },
    { nome: "blog", cor: "#FFD902" },
    { nome: "contato", cor: "black" },
    { nome: "vagas", cor: "red" },
  ];

  useEffect(() => {
    if (location.pathname === "/inicio") {
      setLogo(Logo);
    } else {
      setLogo(DarkLogo);
    }
  }, [location]);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    handleResize(); 
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <section>
        {
            isMobileMenuOpen && !isDesktop &&(
              <div className={styles.container}></div>
            )
        }
        <header className={`${styles.header} ${location.pathname === '/inicio' ? styles.transpa : styles.backWhite}`}>
          <nav className={styles.nav}>
            <img src={logo} alt="Logo" className={styles.logo} />
            {!isDesktop && (
              <button
                className={styles.menuButton}
                onClick={() => setIsMobileMenuOpen(prev => !prev)}
              >
                {isMobileMenuOpen ? <AiOutlineClose/> : <AiOutlineMenu/>}
              </button>
            )}
            {(isDesktop || isMobileMenuOpen) && (
              <section className={styles.menuSection}>
                <ul className={styles.links}>
                  {links.map((item, index) => (
                    <li key={index}>
                     <NavLink
                            to={`/${item.nome.toLowerCase().replace("í","i").replace(" ","-")}`}
                            end={item.nome === "início"}
                            className={({ isActive }) =>
                                `${styles.link} ${isActive ? styles.active : ""}`
                            }
                            style={isActive => isActive ? { '--active-color': item.cor } : {} }
                            >
                            {item.nome}
                    </NavLink>
                    </li>
                  ))}
                </ul>
                <button className={styles.searchButton} aria-label="Pesquisar">
                  <CiSearch/> Pesquisar
                </button>
              </section>
            )}
          </nav>
        </header>
    </section>
  );
}