import Image from "next/image";
import theme from "../styles/Theme";

const Card = ({ data }) => {
  const { icon, title, description, alt } = data;
  return (
    <>
      <div className="card">
        <div className="card__image">
          <Image src={icon} alt={alt} layout="fill" />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <style jsx>{`
        .card {
          background: #ffffff;
          padding: 1.625rem 0.625rem;
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
          border-radius: 1rem;

          text-align: center;
        }

        .card__image {
          position: relative;
          width: 3.2rem;
          height: 3.2rem;
          margin: 0 auto;
        }

        .card h3 {
          margin-top: 1rem;
          color: #ff0015;
          font-weight: 700;
          font-size: 0.9rem;
        }

        .card p {
          margin-top: 0.8rem;
          font-size: 0.75rem;
          line-height: 130%;
        }
      `}</style>

      <style jsx>{`
        @media (min-width: 1280px) {
          .card {
            background: ${theme.color.mainLinear};
            padding: 1rem;
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
            border-radius: 1rem;

            max-width: 13rem;
            transition: 0.4s;
            overflow: hidden;
          }

          .card:nth-child(2) {
            transform: translateY(1.5rem);
          }

          .card:nth-child(4) {
            transform: translate(0.5rem, 2rem) scale(1.05);
            background: #ffffff;
          }
          .card:nth-child(4) .card__image {
            transform: translateY(0);
          }
          .card:nth-child(4) p {
            transform: translateY(0);
            opacity: 1;
          }

          .card:nth-child(4) h3 {
            color: #ff0015;
            transform: translateY(0);
          }

          .card:hover {
            background: #ffffff;
            z-index: 10;
          }

          .card:nth-child(1):hover {
            transform: tra.5ate(-2rem, -1rem) scale(1.05);
          }
          .card:nth-child(2):hover {
            transform: translate(1rem, -0.5rem) scale(1.05);
          }
          .card:nth-child(3):hover {
            transform: translate(-1rem, 1rem) scale(1.05);
          }

          .card__image {
            position: relative;
            transform: scale(1.5) translateY(2.3rem);
            transition: 0.2s;

            width: 2.5rem;
          }

          .card:hover .card__image {
            transform: translateY(0);
          }

          .card h3 {
            color: white;
            transition: 0.2s;
            font-size: 1rem;
            transform: scale(1.1) translateY(4rem);
          }

          .card:hover h3 {
            color: #ff0015;
            transform: translateY(0);
          }

          .card p {
            margin-top: 0.8rem;
            font-size: 0.8rem;
            line-height: 130%;

            transform: translateY(5rem);
            opacity: 0;
            transition: 0.2s;
          }

          .card:hover p {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default Card;
