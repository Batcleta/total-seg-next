import { useForm } from "react-hook-form";
import axios from "axios";
// theme
import theme from "../../styles/Theme";

export default function WeCall() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const weCallSubmit = (data) => {
    axios.post("/api", data).then(console.log);
  };

  return (
    <section className="we__call">
      <div className="we__call__Info container">
        <h2>Prefere que entremos em contato?</h2>
        <p>
          Informe seu Nome e um telefone que um de nosssos especialistas entrará
          em contato
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

      <style jsx>{`
        .we__call {
          transform: skewY(-3deg);
          z-index: 0;
        }

        .we__call__Info {
          border-radius: 0.5rem;
          background: ${theme.color.mainLinear};
          padding: 3rem 1.2rem;
        }

        .we__call__Info h2 {
          transform: skewY(3deg);
          font-size: 2.1rem;
          margin-bottom: 1rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.98);
        }

        .we__call__Info p {
          transform: skewY(3deg);
          display: block;
          margin-bottom: 1.5rem;
          color: white;
          font-weight: 700;
          line-height: 130%;
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .we__call__Info form {
          transform: skewY(3deg);
          display: grid;
          gap: 1rem;
          max-width: 20rem;
        }

        .we__call__Info input {
          height: 3.125rem;
          border-radius: 2rem;
          padding-left: 1.5rem;
          font-size: 0.95rem;
          background-color: rgba(255, 255, 255, 1);
        }

        .we__call__Info input::placeholder {
          color: ${theme.color.mainTextColor};
        }

        .send__button {
          height: 3.125rem;
          border-radius: 2rem;
          font-size: 0.95rem;

          background: none;
          outline: none;
          border: none;

          border: 1px solid white;
          color: white;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}
