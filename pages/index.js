import Head from "next/head";
import CTAButton from "../components/CTAButton";
import SiteMenu from "../components/Menu";
import theme from "../styles/Theme";
import { useForm } from "react-hook-form";
import axios from "axios";
import websiteData from "../data/data";
import Card from "../components/Card";

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const weCallSubmit = (data) => {
    axios.post("/api", data).then(console.log);
  };

  return (
    <>
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* ================= Nav =============================== */}

        <SiteMenu />
        <main>
          {/* Header Section */}
          <header className="container" id="#inicio">
            <div className="header__main__info">
              <h3 className="header__subtitle">O melhor</h3>
              <h1 className="header__title">
                Alarme monitorado
                <br />
                <span className="header__title__span">
                  {" "}
                  Com aviso a polícia
                </span>
              </h1>
            </div>

            <div className="header__subinfo">
              <h2 className="hader__subinfo__heading">
                <span>100%</span> Sem fio, com
              </h2>
              <h2 className="hader__subinfo__heading">
                <span>50%</span> de desconto
              </h2>
              <small className="small__text">por tempo limitado</small>
            </div>

            <CTAButton />

            <p className="header__description">
              A união perfeita entre a ultima geração de câmeras de segurança
              com gravação em full HD e um sistema de alarme monitorado de alta
              precisão <span>com aviso a policia.</span>
            </p>
          </header>

          {/* Section call-us */}
          <section className="we__call">
            <div className="we__call__Info">
              <h2>Prefere que entremos em contato?</h2>
              <p>
                Informe um telefone que um de nosssos especialistas entrará em
                contato
              </p>

              <form onSubmit={handleSubmit(weCallSubmit)}>
                <input
                  type="text"
                  placeholder="Digite seu nome"
                  {...register("nome")}
                />
                <input
                  type="phone"
                  placeholder="Digite seu telefone"
                  {...register("telefone")}
                />
                <button className="send__button" type="submit">
                  Enviar
                </button>
              </form>
            </div>
            <div className="we__call__Image"></div>
          </section>

          {/* section advantages */}
          <section className="advantages container" id="#vantagens">
            <div className="advanges__card">
              {websiteData.advantagesCards.map((item) => (
                <Card data={item} />
              ))}
            </div>
          </section>
        </main>

        <footer>
          <span>
            {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
          </span>
        </footer>
      </div>

      {/* Global document style */}
      <style jsx>{`
        .container {
          padding: 1.2rem;
          overflow: hidden;
        }
      `}</style>

      {/* Header style */}
      <style jsx>{`
        header {
          margin-top: 7rem;
        }

        .header__main__info {
          display: grid;
          gap: 0.8rem;
        }

        .header__title {
          font-size: 3rem;
          font-weight: 800;
          color: ${theme.color.mainColor};
          line-height: 90%;
        }

        .header__title span {
          color: #0b0b0b;
          font-weight: 600;
          font-size: 1.9rem;
        }

        .header__subtitle {
          font-size: 1.1rem;
          font-weight: 700;
        }

        .header__subinfo {
          margin-top: 1rem;
          display: grid;
          gap: 0.4rem;
        }

        .hader__subinfo__heading {
          font-size: 1.6rem;
          font-weight: 800;
        }

        .hader__subinfo__heading span {
          color: ${theme.color.mainColor};
        }

        .small__text {
          font-size: 0.8rem;
        }

        .header__description {
          margin-top: 2rem;
          color: #0b0b0b;
          font-size: 1rem;
          line-height: 130%;
        }
        .header__description span {
          color: ${theme.color.mainColor};
        }
      `}</style>

      {/* We call section */}
      <style jsx>{`

        .we__call {
          margin-top: 2rem;
          transform: skewY(-3deg);

        }

        .we__call__Info {
          border-radius: .5rem;
          padding: 3rem 1.5rem;
          background: ${theme.color.mainColor}};
        }

        .we__call__Info h2{
          transform: skewY(3deg);
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-weight: 800;
          color: white;
        }

        .we__call__Info p{
          transform: skewY(3deg);
          display: block;
          margin-bottom: 1.5rem;
          color: white;
        }

        .we__call__Info form{
          transform: skewY(3deg);
          display: grid;
          gap: 1rem;
          width: 19rem;
        }

        .we__call__Info input{
          height: 3rem;
          border-radius: 2rem;
          padding-left: 1.5rem;
          font-size: .95rem;

        }

         .send__button{
          height: 2.8rem;
          border-radius: 2rem;
          font-size: .95rem;
          max-width: 10rem;

          background: none;
          outline: none;
          border: 1px solid white;

          color: white;
        }

      `}</style>

      {/* section advantages section */}
      <style jsx>{`
        .advanges__card {
          display: grid;
          grid-template-columns: auto auto;
          gap: 1rem;
        }
      `}</style>

      <style jsx>{``}</style>
      <style jsx>{``}</style>
    </>
  );
}
