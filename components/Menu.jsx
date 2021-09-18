import Link from "next/link";
import Image from "next/image";
import theme from "../styles/Theme";
import { useToggle } from "../context/appContext";
import ToggleButton from "./ToggleButton";
import websiteData from "../data/data";

const SiteMenu = () => {
  const { toggle, isToggled } = useToggle();

  return (
    <>
      <nav className="nav__wrapper">
        <div className="nav__container">
          <div className="nav__image">
            <Image
              src={"/web-menu-logo.svg"}
              alt="logo total segurança"
              width={134}
              height={43}
            />
          </div>
          <div className="menu__container">
            <div></div>
            <ul className="menu__list">
              {websiteData.menuItens.map((item, index) => (
                <li className="menu__item" key={index}>
                  <i className={item.icon}></i>
                  <Link href={`#${item.link}`}>
                    <a className="menu__link">{item.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="menu__costumer__area">
              <Link href="#area">
                <a className="menu__link">Área do cliente</a>
              </Link>
            </div>
          </div>
          <div className="nav__background"></div>
          <ToggleButton />
        </div>
      </nav>

      <style jsx>{`
        .nav__wrapper {
          position: ${!toggle ? "absolute" : "fixed"};
          top: 0;

          padding: 1.5rem;
          width: 100vw;
          z-index: 100;
        }

        .nav__container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav__image {
          z-index: 102;
          transition: .3s;
          transform: scale(${!toggle ? "" : "1.2"}) translate(${
        !toggle ? "" : "1rem, 1rem"
      });
        }

        .menu__container {
          z-index: 101;
          position: fixed;
          top: 0;
          left: 0;

          display: grid;
          gap: 5rem;

          width: 75vw;
          height: 100vh;
          padding: 20px;

          background: white;
          box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.25);

          transform: translateX(${!toggle ? "-100%" : "0"});
          transition: 0.4s;
        }

        .menu__list {
          display: grid;
          gap: 1rem;
        }

        .menu__item {
          display: grid;
          grid-template-columns: 2rem auto;
          align-items: center;
        }

        .menu__item > i {
          display: grid;
          align-items: center;
          justify-content: center;

          width: 1.5rem;
          height: 1.5rem;
          margin-right: 1rem;

           {
            /* border-radius: 50%;
          background-color: ${theme.color.mainColor}; */
          }
        }

        .menu__link{
            color:  rgba(0, 0, 0, 0.6);
            font-weight: 500 ;
        }

        .menu__costumer__area {
          display: grid;
          justify-content: center;
          align-items: center;
           {
            /* justify-self: center; */
          }

          width: 12rem;
          height: 2.5rem;

          background-color: ${theme.color.mainColor};
          border-radius: 2rem;
        }

        .menu__costumer__area a {
          color: white; !important
        }

        .nav__background {
          z-index: 100;
          position: absolute;
          top: 0;
          left: 0;

          visibility: ${!toggle ? "hidden" : "visible"};
          opacity: ${!toggle ? "0" : "1"};

          width: 100vw;
          height: 100vh;

          transition: 0.5s;

          background-color: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </>
  );
};

export default SiteMenu;
