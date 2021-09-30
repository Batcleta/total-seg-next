import theme from "../styles/Theme";
import Image from "next/image";
import { useRouter } from "next/router";

import { useProgress } from "../context/appContext";

const ContactButton = (props) => {
  const { setProgress } = useProgress();
  const router = useRouter();

  const { image, title, link, lstorage } = props;

  const next = (value) => {
    localStorage.setItem(`${lstorage}`, value);
    setProgress(1 + localStorage.length);
    router.push(`/total-cotacao/${link}`);
  };

  return (
    <>
      <div
        className="button__wrapper"
        onClick={(e) => next(e.target.innerText)}
      >
        <div className="button__icon">
          <Image
            src={`/cotacao/${image}-ico.svg`}
            alt={image}
            width={28.83}
            height={27.56}
            layout="responsive"
          />
        </div>
        <h3>{title}</h3>
      </div>

      <style jsx>{`
        .button__wrapper {
          background-color: ${theme.color.mainColor};
          box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);

          display: grid;
          grid-template-columns: 2rem auto;
          align-items: center;
          gap: 1rem;

          padding: 1rem 1.5rem;
          border-radius: 1rem;
          cursor: pointer;
        }

        .button__wrapper:hover {
          background-color: ${theme.color.mainColor};
        }

        .button__wrapper h3 {
          color: white;
          font-size: 1.1rem;
        }
      `}</style>

      <style jsx>{`
        @media (min-width: 1280px) {
          .button__wrapper {
            background-color: ${theme.color.mainColor};
            box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);

            display: grid;
            grid-template-columns: auto;
            align-content: center;
            justify-items: center;
            gap: 1.5rem;

            width: 12.1875em;
            height: 12.1875em;

            padding: 0;
            border-radius: 1rem;
            cursor: pointer;

            transition: 0.2s;
          }

          .button__wrapper:hover {
            transform: scale(1.05);
          }

          .button__icon {
            width: 3em;
          }

          .button__wrapper h3 {
            color: white;
            font-size: 1rem;
            line-height: 120%;
            max-width: 6rem;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};

export default ContactButton;
