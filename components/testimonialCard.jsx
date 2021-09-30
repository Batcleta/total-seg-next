import Image from "next/image";
import theme from "../styles/Theme";

const TestimonialCard = ({ item }) => {
  return (
    <>
      <div className="testimonial__wrapper">
        <div className="testimonial__image">
          <Image src={item.image} width={44} height={44} alt={item.alt} />
        </div>
        <h2 className="testimonial__title">{item.client}</h2>
        <h3 className="testimonial__subtitle">{item.whois}</h3>
        <p className="testimonial__description">{item.testimonial}</p>
      </div>

      <style jsx>{`
  

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
          font-weight: 500;
          color: Rgba(255,255,255,1);;
        }

        .testimonial__description {
          font-size: 0, 9rem;
          color: Rgba(255,255,255,.85);
          line-height: 130%;
        }

        
        }
      `}</style>
    </>
  );
};

export default TestimonialCard;
