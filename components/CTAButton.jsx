import theme from "../styles/Theme";
import router from "next/router";

export default function CTAButton() {
  const onSubit = () => {
    router.push("/total-cotacao");
  };

  return (
    <>
      <div className="cta__button" onClick={() => onSubit()}>
        <div className="cta__link">Quero um orçamento gratuito</div>
      </div>

      <style jsx>{`
        .cta__button {
          margin-top: 2rem;

          display: grid;
          justify-content: center;
          align-items: center;

          max-width: 17rem;
          height: 3rem;

          background: ${theme.color.mainLinear};
          border-radius: 4rem;

          transition: 0.2s;
          cursor: pointer;
        }

        .cta__button:hover {
          transform: scale(1.1);
        }

        .cta__link {
          color: white;
        }
      `}</style>
    </>
  );
}
