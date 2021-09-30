import Link from "next/link";
import Image from "next/image";
import theme from "../styles/Theme";
import { useToggle } from "../context/appContext";
import ToggleButton from "./ToggleButton";
import websiteData from "../data/data";
import utilStyles from "../styles/utils.module.css";

const SiteMenu = (props) => {
  const { toggle, isToggled } = useToggle();
  const { size } = props;

  const menuList = !size > 768 ? websiteData.menuItens : websiteData.menuWeb;

  return (
    <>
      <nav className="nav__wrapper">
        <div className="nav__container">
          <div className="nav__image">
            <Image
              src={"/web-logo-total-seguranca.svg"}
              alt="logo total segurança"
              width={134}
              height={43}
            />
          </div>
          <div className="menu__container">
            <div></div>
            <ul className="menu__list">
              {menuList.map((item, index) => (
                <li className="menu__item" key={index}>
                  <i className={item.icon}></i>
                  <Link href={`#${item.link}`}>
                    <a
                      className={utilStyles.menuLinkText}
                      onClick={() => isToggled(false)}
                    >
                      {item.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="menu__costumer__area">
              <Link href="#area">
                <a className={utilStyles.menuLinkText}>Área do cliente</a>
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
          transform: scale(${!toggle ? "1" : "1.2"}) translate(${
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
          padding: 1.25rem;

          background: white;
          box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.25);

          transform: translateX(${!toggle ? "-100%" : "0"});
          transition: 0.3s;
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
        }

        .menu__costumer__area {
          display: grid;
          justify-content: center;
          align-items: center;
          align-self: center;


          width: 14rem;
          height: 3rem;

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

      <style jsx>{`
        @media (min-width: 1280px) {
          .nav__wrapper {
            position: absolute;
            box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.1);
            padding: 1rem;
            background: white;
          }

          .nav__image {
            width: 7rem;
          }

          .nav__container {
            display: flex;
            gap: 2rem;
            align-items: center;

            max-width: 1234px;
            padding: 0 1rem;
            margin: 0 auto;
          }

          .menu__container {
            position: initial;

            display: flex;

            width: auto;
            height: auto;
            padding: 0;

            box-shadow: none;

            transform: translateX(0);
            background: transparent;
            transition: 0.3s;
          }

          .menu__list {
            display: flex;
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
          }

          .menu__costumer__area {
            display: grid;
            justify-content: center;
            align-items: center;
            align-self: center;

            width: 8.5rem;
            height: 2.1rem;

            background-color: ${theme.color.mainColor};
            border-radius: 2rem;
          }

          .nav__background {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default SiteMenu;
