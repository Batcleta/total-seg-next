import Image from "next/image";
import theme from "../../styles/Theme";

import { useProgress } from "../../context/appContext";

const Layout = (props) => {
  const { children } = props;

  const { progress } = useProgress();

  return (
    <>
      <div className="cotacao__image">
        <Image
          src={"/cotacao/cotacao-background.jpg"}
          alt="Logo total segurança"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="wrapper__cotacao">
        <header className="header">
          <div className="header__logo">
            <Image
              src={"/web-logo-total-seguranca.svg"}
              alt="Logo total segurança"
              width={274}
              height={89}
              layout="responsive"
            />
          </div>
          <div className="header__text-container web">
            <h3 className="header__text subtitle">
              Faça sua <span>cotação online</span>
            </h3>
            <h2 className="header__text title">E ganhe</h2>
            <h1> 50%</h1>
            <h3 className="header__text small-title">
              De desconto <span> por tempo limitado</span>
            </h3>
          </div>

          <div className="header__text-container mobile">
            <h2>
              Com <span>50%</span> de <span>desconto</span>
            </h2>
          </div>
        </header>
        <main className="main__container">
          <div className="main__header">
            {progress !== 5 ? (
              <>
                <h1>Proteja o seu patrimônio</h1>
                <p>Em menos de 30 segundos</p>
              </>
            ) : (
              <>
                <div className="main__header-title">
                  <h1>Parabéns</h1>
                  <div className="image__header-title">
                    <Image
                      src={"/thanks/thanks-check-image.svg"}
                      alt="logo total segurança"
                      width={95}
                      height={95}
                      layout={"responsive"}
                    />
                  </div>
                </div>
                <p className="main__header-subtitle">
                  Suas respostas foram analizadas e nossa equipe está montando o
                  seu orçamento personalizado.
                </p>
              </>
            )}
            <div className="progress__bar-container">
              {/* Map span, será a quantidade de data */}
              <span className="progress__bar"></span>
              <span className="progress__bar"></span>
              <span className="progress__bar"></span>
              <span className="progress__bar"></span>
              <span className="progress__bar"></span>
            </div>
          </div>
          <div className="main__content">{children}</div>
        </main>

        <style jsx>{`
          .cotacao__image {
            z-index: -1;
            width: 100vw;
            height: 100vh;
            position: relative;
          }

          .wrapper__cotacao {
            display: grid;
            position: relative;
          }

          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.2rem;
          }

          .header__logo {
            width: 8rem;
          }

          .header__text-container.web {
            display: none;
          }
          .header__text-container.mobile {
            max-width: 7rem;
          }

          .header__text-container.mobile h2 {
            font-style: italic;
            font-weight: 700;
            font-size: 0.9rem;
            line-height: 130%;
          }

          .header__text-container.mobile h2 span:nth-child(1) {
            font-weight: 900;
            font-size: 2rem;
            color: ${theme.color.mainColor};
          }

          .header__text-container.mobile h2 span:nth-child(2) {
            font-size: 1.2rem;
          }

          .main__container {
            padding: 1rem 1.2rem;
          }

          .main__header {
            padding: 1rem 1.2rem;
          }

          .main__header h1 {
            font-weight: 700;
            font-size: 1.5625rem;
            line-height: 130%;
            color: #000000;
            margin-bottom: 0.4rem;
          }

          .progress__bar-container {
            margin-top: 1rem;
            display: grid;
            grid-template-columns: repeat(5, auto);
            gap: 0.5rem;
          }

          .progress__bar {
            background: #ff001530;
            height: 0.7rem;
            border-radius: 1rem;
            opacity: 0.4;
            transition: opacity 0.2s ease-in;
          }

          .progress__bar:nth-child(-n + ${progress}) {
            background: #ff0015;
            opacity: 1;
          }

          .main__content {
            margin-top: 2rem;
            background: rgba(255, 255, 255, 0.9);
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
            border-radius: 1rem;
            padding: 3rem 1.2rem;
          }
        `}</style>

        <style jsx>{`
          @media (min-width: 1280px) {
            .wrapper__cotacao {
              grid-template-columns: 25rem auto;
              z-index: 2;
            }

            .header {
              display: grid;
              justify-content: center;
              align-content: start;
              padding: 3rem 0;
            }

            .header__logo {
              width: 15rem;
              margin-bottom: 8.5rem;
            }

            .header__text-container.web {
              display: initial;
            }

            .header__text.subtitle {
              font-weight: 800;
              font-size: 1.6rem;
              margin-bottom: 1rem;
            }

            .header__text.subtitle span {
              color: #ff0015;
            }

            .header__text.title {
              font-weight: 800;
              font-size: 4.8rem;
              margin-bottom: 2rem;
            }

            .header__text-container.web h1 {
              font-weight: 900;
              font-size: 8.9em;
              color: #ff0015;
              font-style: italic;
              margin-bottom: 1rem;
            }

            .header__text.small-title {
              font-weight: 800;
              font-size: 1.6rem;
            }

            .header__text.small-title span {
              font-weight: 400;
              font-size: 1rem;
            }

            .header__text-container.mobile {
              display: none;
            }

            .main__container {
              display: grid;
              align-content: center;
              padding: 5rem 6rem;
              background-color: rgba(255, 255, 255, 0.9);

              height: 100vh;
              border-radius: 1rem;
              box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
            }

            .main__header {
            }

            .main__header-title {
              display: flex;
              gap: 2rem;
            }

            .main__header-title > h1 {
              font-size: 2.2rem;
            }

            .image__header-title {
              width: 2.5rem;
            }

            .main__header-subtitle {
              max-width: 35rem;
              font-size: 1.8rem;
              font-weight: 600;
              line-height: 120%;
            }

            .main__header > h1 {
              font-size: 2.2rem;
              margin-bottom: 0.8rem;
            }

            .main__header p {
              font-size: 1.1rem;
            }

            .progress__bar-container {
              margin-top: 1.8rem;

              gap: 1rem;
              max-width: 22rem;
            }

            .progress__bar {
              height: 0.5rem;
            }

            .progress__bar:nth-child(-n + ${progress}) {
            }

            .main__content {
              margin-top: 0rem;
              background: none;
              box-shadow: none;
              border-radius: 1rem;
              padding: 3rem 1.2rem;

              max-width: 40rem;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Layout;
