import Link from "next/link";
import Image from "next/image";
import Theme from "../styles/Themes";
import { useToggle } from "../context/appContext";
import ToggleButton from "./ToggleButton";

const SiteMenu = () => {
  const { toggle, isToggled } = useToggle();

  const mobileMenu = [
    { title: "Inicio", link: "inicio" },
    { title: "Principais Vantagens", link: "vantagens" },
    { title: "Smart App", link: "app" },
    { title: "Nossos Clientes", link: "clientes" },
    { title: "Total Alarme", link: "nossoAlarme" },
    { title: "Contato", link: "contato" },
  ];

  return (
    <>
      <nav className="nav__wrapper">
        <div className="nav__container">
          <div className="nav__image">
            <Image
              src="/web-menu-logo.svg"
              alt="logo total segurança"
              width={115.31}
              height={37.45}
            />
          </div>
          <div className="menu__container">
            <ul className="menu__list">
              {mobileMenu.map((item, index) => (
                <li className="menu__item" key={index}>
                  <Link href={`#${item.link}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <div className="nav__costumer__area">
              <Link href="#area">Área do cliente</Link>
            </div>
          </div>
          <div className="nav__background"></div>
          <ToggleButton />
        </div>
      </nav>

      <style jsx>{`
        .nav__wrapper {
          box-sizing: border-box;
          position: absolute;
          top: 0;

          padding: 1.5rem;
          width: 100vw;
          height: 100vh;

          background-color: pink;
        }

        .nav__container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .menu__container {
          position: absolute;
          visibility: hidden;
        }
      `}</style>
    </>
  );
};

export default SiteMenu;
