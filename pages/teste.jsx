import Slide from "../components/slider/Slider";
// import websiteData from "../data/data";
import Image from "next/image";
// import CTAButton from "../components/CTAButton";

const Teste = () => {
  return (
    <>
      <Slide>
        {websiteData.advantagesCarroussel.map((item, index) => (
          <div className="keen-slider__slide slider__item">
            <div className="slide__image">
              <Image src={item.image} width={313} height={192} />
            </div>
            <div className="slider__title">Total Segurança</div>
            <div className="slider__subtitle">{item.subtitle}</div>
            <div className="slider__description">{item.description}</div>
          </div>
        ))}
      </Slide>
      <div className="button__wrapper">
        <CTAButton />
      </div>

      <style jsx>{`
        .slider__item {
        }

        .slider__title {
          color: #ff0015;
          font-weight: 800;
          font-size: 20px;
        }

        .slide__image {
          margin-bottom: 1.5rem;
        }

        .slider__subtitle {
          font-weight: 800;
          font-size: 23px;
          color: #0b0b0b;
          margin-bottom: 1.5rem;
        }

        .slider__description {
          color: #0b0b0b;
        }

        .button__wrapper {
          max-width: 18rem;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
};
export default Teste;
