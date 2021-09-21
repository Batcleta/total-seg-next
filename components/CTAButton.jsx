import Link from "next/link";
import theme from "../styles/Theme";

export default function CTAButton() {
  return (
    <>
      <div className="cta__button">
        <Link href="/total-cotacao">
          <a className="cta__link">Quero um orçamento gratuito</a>
        </Link>
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
          border-radius: 2rem;

          transition: 0.2s;
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
