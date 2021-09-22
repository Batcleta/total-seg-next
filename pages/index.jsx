import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// Styles
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import theme from "../styles/Theme";
// Components
import SiteMenu from "../components/Menu";
import CTAButton from "../components/CTAButton";
import WeCall from "../components/templates/WeCall";
import Slider from "../components/slider/Slider";
import Card from "../components/Card";
// data
import websiteData from "../data/data";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Total Segurança</title>
        <meta
          name="description"
          content="O melhor alarme monitorado do Brasil"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SiteMenu />
      <main className={styles.main}>
        {/* Header */}
        <header className={styles.container} id="inicio">
          <div className="header__main__info">
            <h3 className={` ${utilStyles.headingH3}`}>O melhor</h3>
            <h1 className="header__title">
              Alarme monitorado
              <br />
              <span className="header__title__span"> Com aviso a polícia</span>
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

          <p className={`header__description ${utilStyles.mainParagraph}`}>
            A união perfeita entre a ultima geração de câmeras de segurança com
            gravação em full HD e um sistema de alarme monitorado de alta
            precisão <span>com aviso a policia.</span>
          </p>

          <style jsx>{`
            .header__main__info {
              display: grid;
              gap: 1rem;
            }

            .header__title {
              font-size: 3rem;
              font-weight: 800;
              color: ${theme.color.mainColor};
              line-height: 90%;
            }

            .header__title span {
              color: ${theme.color.mainTextColor};
              font-weight: 600;
              font-size: 1.9rem;
            }

            .header__subinfo {
              margin-top: 1rem;
              display: grid;
              gap: 0.6rem;
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
            }
            .header__description span {
              color: ${theme.color.mainColor};
            }
          `}</style>
        </header>

        {/* component section - we call */}
        <WeCall />

        {/* section advantages */}
        <section className="advantages" id="vantagens">
          <div className="advantages__text__wrapper">
            <h2 className={utilStyles.headingH2}>Principais Vantagens</h2>
            <p>
              Com o alarme monitorado total segurança, seu patrimonio está
              sempre protegido{" "}
            </p>
          </div>

          <div className="advantages__swiper">
            <Slider>
              {websiteData.advantagesCarroussel.map((item, index) => (
                <div
                  className="keen-slider__slide lazy__slide slider__item"
                  key={index}
                >
                  <div className="slide__image">
                    <Image
                      src={item.image}
                      width={313}
                      height={192}
                      alt={item.alt}
                    />
                  </div>
                  <div className="slider__title">Total Segurança</div>
                  <div className="slider__subtitle">{item.subtitle}</div>
                  <div className={utilStyles.mainParagraph}>
                    {item.description}
                  </div>
                </div>
              ))}
            </Slider>
            <div className={styles.button__wrapper}>
              <CTAButton />
            </div>
          </div>

          <div className="advanges__card">
            {websiteData.advantagesCards.map((item, index) => (
              <Card data={item} key={index} />
            ))}
          </div>

          <style jsx>{`
            .advantages {
              padding: 4rem 0;
            }

            .advantages__text__wrapper {
              padding: 0 1.2rem 2rem;
            }

            .slider__item {
              padding: 0rem 1.5rem;
              margin-bottom: 1rem;
            }

            .slider__title {
              color: ${theme.color.mainColor};
              font-weight: 700;
              font-size: 1.2rem;
            }

            .slide__image {
              margin-bottom: 1.8rem;
            }

            .slider__subtitle {
              font-weight: 800;
              font-size: 23px;
              color: ${theme.color.mainTextColor};
              margin-bottom: 1.5rem;
            }

            .advanges__card {
              display: grid;
              grid-template-columns: auto auto;
              gap: 1rem;
              margin-top: 2.5rem;
              padding: 0 1.2rem;
            }
          `}</style>
        </section>

        {/* Section App */}
        <section className={styles.container} id="app">
          <h2>O controle na palma da sua mão</h2>
          <p className={utilStyles.mainParagraph}>
            Através de nosso aplicativo você gerencia o seu alarme e acompanha
            acontece em sua empresa ou residência em tempo real com áudio
            bilateral e imagem de alta qualidade. Tudo isso de qualquer lugar no
            mundo através do seu smartphone.
          </p>
          <div className="app__image__container">
            <Image
              src={"/mobile-app-image.webp"}
              width={400}
              height={315}
              alt={"Aplicativo Total Segurança"}
            />
          </div>
          <div className={styles.button__wrapper}>
            <CTAButton />
          </div>

          <style jsx>{`
            #app h2 {
              font-size: 2.5rem;
              line-height: 110%;
              font-weight: 900;
              color: ${theme.color.mainColor};
              margin-bottom: 1.5rem;
            }

            .app__image__container {
              display: grid;
              padding: 1.5rem 0 0;
            }
          `}</style>
        </section>

        {/* Section Testimonials */}
        <section className="testimonials" id="clientes">
          <div className="testimonial__text__wrapper">
            <h2 className={utilStyles.headingH2}>+ de 7.500 clientes</h2>
            <p className={utilStyles.mainParagraph}>
              Confiam a segurança de seus comércios e residencias ao alarme
              monitrado total segurança
            </p>
          </div>

          <div className="testimonial__swiper">
            <Slider SperView={35 / 32}>
              {websiteData.testimonials.map((item, index) => (
                <div className="keen-slider__slide slider__item" key={index}>
                  <div className="testimonial__wrapper">
                    <div className="testimonial__image">
                      <Image
                        src={item.image}
                        width={44}
                        height={44}
                        alt={item.alt}
                      />
                    </div>
                    <h2 className="testimonial__title">{item.client}</h2>
                    <h3 className="testimonial__subtitle">{item.whois}</h3>
                    <p className="testimonial__description">
                      {item.testimonial}
                    </p>
                  </div>
                  {index === 0 ? (
                    <Link href="/area-do-cliente">
                      <a className="testimonial__add__link">
                        Envie seu depoimento
                      </a>
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </Slider>
          </div>

          <style jsx>{`
            .testimonial {
              padding: 4rem 0 0;
            }

            .slider__item {
              padding: 1rem 0 0 1.2rem;
            }

            .testimonial__wrapper {
              width: 20rem;
              background: ${theme.color.mainColor};
              box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.25);
              border-radius: 1rem;
              padding: 1.5rem;
              display: grid;
              gap: 0.4rem;
              margin-bottom: 2rem;
            }

            .testimonial__title {
              font-size: 1, 0625rem.;
              color: #fff;
            }

            .testimonial__subtitle {
              font-size: 0, 8125rem;
              color: #ffa3a3;
            }

            .testimonial__description {
              font-size: 0, 9rem;
              color: #ffffff80;
              line-height: 130%;
            }

            .testimonial__text__wrapper {
              padding: 1.2rem;
            }

            .testimonial__add__link {
              font-size: 0.813;
              font-weight: 600;
              color: ${theme.color.mainColor};
              padding: 0 1rem;

              margin-bottom: 1rem;
              display: block;
            }
          `}</style>
        </section>

        {/* Section Equipments */}
        <section className={styles.container} id="nossoAlarme">
          <div className="equipment__text__wrapper">
            <h2 className={utilStyles.headingH2}>
              Conheça seu novo equipamento
            </h2>
            <p className={utilStyles.mainParagraph}>teste de equipamento</p>
          </div>

          {websiteData.equipment.map((item, index) => (
            <div className="equipment__content" key={index}>
              <Image src={item.image} alt={item.alt} width={375} height={346} />

              <div className="equipment__content-text">
                <h2>{item.title}</h2>
                <p className={utilStyles.mainParagraph}>{item.description}</p>

                {index % 2 === 0 ? (
                  <div className={styles.button__wrapper}>
                    <CTAButton />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}

          <style jsx>{`
            .equipment__content {
              padding: 3rem 0;
            }

            .equipment__content-text {
              margin-top: 2rem;
              text-align: center;
              padding: 0 1rem;
            }
            .equipment__content-text h2 {
              text-align: center;
              font-weight: 800;
              font-size: 23px;
              color: ${theme.color.mainColor};
              margin-bottom: 1.5rem;
            }
          `}</style>
        </section>

        {/* component section - we call */}
        <WeCall />
      </main>

      <footer className={styles.container}>
        <Image
          src="/web-logo-total-seguranca.svg"
          alt="Total segurança Logo"
          width={134}
          height={43}
        />

        <div className="footer__info">Total segurança © 2021</div>
        <div className="footer__links">
          <Link href="/termos-de-serviço">
            <a className="footer__link">Termos de serviço</a>
          </Link>

          <Link href="/termos-de-privacidade">
            <a className="footer__link">Termos de privacidade</a>
          </Link>
        </div>

        <style jsx>{`
          footer {
            display: grid;
            gap: 2rem;
            justify-content: center;
            align-items: center;
          }

          .footer__info {
            text-align: center;
          }

          .footer__link {
            font-size: 0.813rem;
            color: #00000099;
            padding: 1rem;
          }
        `}</style>
      </footer>
    </div>
  );
}
