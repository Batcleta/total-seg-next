import Image from "next/image";

const Card = ({ data }) => {
  const { icon, title, description, alt } = data;
  return (
    <>
      <div className="card">
        <Image
          className="card__image"
          src={icon}
          alt={alt}
          width={50}
          height={50}
        />
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
    </>
  );
};

export default Card;
