import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from '../assets/logos/Logo.svg';
import DarkLogo from '../assets/logos/LogoBlack.svg';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import clsx from 'clsx';

import styles from '../styles/NavBar.module.css';

export default function NavBar() {
  const location = useLocation();
  const [logo, setLogo] = useState(Logo);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [changeColor, setChangeColor] = useState(false);

  const links = [
    { nome: "início", cor: "white" },
    { nome: "escolas", cor: "#1CAB00" },
    { nome: "famílias", cor: "#CE8300" },
    { nome: "empresas", cor: "#00A1C5" }
  ];

  useEffect(() => {
    setLogo(location.pathname === "/inicio" ? Logo : DarkLogo);
  }, [location]);

  useEffect(() => {

    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
  const handleScroll = () => {
    setChangeColor(window.scrollY > 40);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {isMobileMenuOpen && !isDesktop && (
        <div className={styles.menuOverlay}></div>
      )}
      <header
        className={clsx(
          styles.header,
          location.pathname ==='/inicio'
          ? (changeColor === true ? styles.backBlack : styles.transpa)
          : styles.backWhite
        ) }
      >
        <nav>
          <div>
            <img src={logo} alt="Logo" className={styles.logo} />
  
            {!isDesktop && (
              <button
                  className={clsx(
                  styles.menuButton,
                  location.pathname === '/inicio' ? styles.menuColorWhite : styles.menuColorBlack
                )}
                onClick={() => setIsMobileMenuOpen(prev => !prev)}>
                {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
              </button>
            )}
          </div>

          {(isDesktop || isMobileMenuOpen) && (
            <section className={styles.menuSection}>
              <ul className={styles.links}>
                {links.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={`/${item.nome.toLowerCase().replace("í", "i").replace(" ", "-")}`}
                      end={item.nome === "início"}
                      className={({ isActive }) =>
                        clsx(
                          styles.link,
                          isActive ? styles.active : location.pathname === '/inicio' ? styles.linkW : styles.linkB)}
                      style={isActive => isActive ? { '--active-color': item.cor } : {}}
                    >
                      {item.nome}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <form className={clsx(
                styles.searchForm,
                styles.formMobile,
                      location.pathname === '/inicio' ? styles.inputW : styles.inputB
                    )} >
                <div className={styles.searchInput}>
                  <CiSearch style={{fontSize:'22px'}}/>
                  <input 
                    type="text" 
                    placeholder="Pesquisar"
                    className={styles.input}
                  />
                </div>
              </form>
            </section>
          )}

          {
            isDesktop && (
              <form className={clsx(
                styles.searchForm,
                styles.formDesck,
                      location.pathname === '/inicio' ? styles.inputW : styles.inputB
                    )} >
                <div className={styles.searchInput}>
                  <CiSearch style={{fontSize:'22px'}}/>
                  <input 
                    type="text" 
                    placeholder="Pesquisar"
                    className={styles.input}
                  />
                </div>
              </form>
            )
          }
        </nav>
      </header>
    </>
  );
}