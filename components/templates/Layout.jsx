import Image from "next/image";
import theme from "../../styles/Theme";

const Layout = (props) => {
  const { children } = props;
  return (
    <div className="wrapper__cotacao">
      <header className="header">
        <div className="header__logo">
          <Image
            src={"/web-menu-logo.svg"}
            alt="Logo total segurança"
            width={274}
            height={89}
            layout="responsive"
          />
        </div>
        <div className="header__text-container web">
          <h3>
            Faça sua <span>cotação online</span>
          </h3>
          <h2>E ganhe</h2>
          <h2> 50%</h2>
          <h3>
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
          <h1>Proteja o seu patrimônio</h1>
          <p>Em menos de 30 segundos</p>
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
        .wrapper__cotacao {
          display: grid;
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
          background-color: #ff001559;
          height: 0.7rem;
          border-radius: 1rem;
        }

        .main__content {
          margin-top: 2rem;
          background: rgba(255, 255, 255, 0.5);
          box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
          border-radius: 1rem;
          padding: 3rem 1.2rem;
        }
      `}</style>
      <style jsx>{`
        @media (min-width: 1280px) {
          .wrapper__cotacao {
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
