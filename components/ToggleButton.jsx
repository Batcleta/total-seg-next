import { useToggle } from "../context/appContext";
import Theme from "../styles/Themes";

export default function ToggleButton() {
  const { toggle, isToggled } = useToggle();
  return (
    <>
      <div className="nav__toggle" onClick={() => isToggled(!toggle)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <style jsx>{`
        .nav__wrapper {
        }
        /* Nav toggle */
        .nav__toggle {
          display: grid;
          justify-content: center;
          align-content: center;

          width: 3rem;
          height: 3rem;

          background: ${Theme.color.mainColor};
          border-radius: 2rem;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25),
            0px 20px 40px rgba(0, 0, 0, 0.25);

          cursor: pointer;
          overflow: hidden;
        }

        .nav__toggle > span {
          background-color: white;
          width: 1.6rem;
          height: 0.1rem;
          margin: 0.2rem 0;
          transition: 0.2s;
        }

         {
          /* nav toggle actived */
        }

        .nav__toggle > span:nth-child(1) {
          transform: rotate(${!toggle ? "0" : "45deg"})
            translate(${!toggle ? "" : ".4rem, .4rem"});
        }

        .nav__toggle > span:nth-child(2) {
          transform: translate(${!toggle ? "0" : "3rem"});
          opacity: ${!toggle ? "1" : "0"};
        }

        .nav__toggle > span:nth-child(3) {
          transform: rotate(${!toggle ? "0" : "-45deg"})
            translate(${!toggle ? "" : ".3rem, -.3rem"});
        }

        @media (min-width: 768px) {
          .nav__toggle {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
