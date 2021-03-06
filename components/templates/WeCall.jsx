import { useForm } from "react-hook-form";
import axios from "axios";
// theme
import theme from "../../styles/Theme";
import { useRouter } from "next/router";

export default function WeCall() {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const weCallSubmit = (data) => {
    axios.post("/api/sendContact", data).then(console.log);

    window.dataLayer?.push({
      event: "thanksPageTeste",
      url: router.pathname,
    });

    router.push("/obrigado");
  };

  return (
    <section className="we__call">
      <div className="we__call__Info container">
        <h2>Nós te ligamos!</h2>
        <p>
          Informe seu Nome e um telefone que um de nosssos especialistas entrará
          em contato
        </p>

        <form onSubmit={handleSubmit(weCallSubmit)}>
          <div className="we__Call-inputs">
            <>
              <input
                type="text"
                placeholder="Digite seu nome"
                name="nome"
                {...register("nome", { required: true })}
              />
              {errors.nome && (
                <small className={"error__message"}>
                  Por Favor, informe seu nome
                </small>
              )}
            </>

            <>
              <input
                type="tel"
                placeholder="( xx ) x xxxx-xxxx"
                name="telefone"
                {...register("telefone", {
                  required: true,
                  pattern: /([0-9]{2,3})?([0-9]{2})([0-9]{4,5})([0-9]{4})/,
                })}
              />
              {errors.telefone && (
                <small className={"error__message"}>
                  Por favor, informe um contato válido
                </small>
              )}
            </>
          </div>
          <button className="send__button" type="submit">
            Enviar
          </button>
        </form>
      </div>

      <style jsx>{`
        .we__call {
          transform: skewY(-3deg);
          z-index: 0;
        }

        .we__call__Info {
          border-radius: 1rem;
          background: ${theme.color.mainLinear};
          padding: 3rem 1.2rem;
        }

        .we__call__Info h2 {
          transform: skewY(3deg);
          font-size: 2.1rem;
          line-height: 120%;
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

        .we__Call-inputs {
          margin-top: 0.5rem;
          display: grid;
          gap: 1rem;
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

        .error__message {
          position: relative;
          background: white;
          padding: 0.8rem;
          margin: 0 1.5rem;
          font-size: 0.7rem;
          border-radius: 0.6rem;
          margin-top: -0.2rem;
          color: ${theme.color.mainColor};
        }

        .error__message:before {
          content: "";
          width: 0px;
          height: 0px;
          position: absolute;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 10px solid transparent;
          border-bottom: 10px solid #fff;
          left: 19px;
          top: -19px;
        }
      `}</style>

      <style jsx>{`
        @media (min-width: 1280px) {
          .we__call {
            position: relative;

            transform: skewY(0);
            z-index: 10;

            max-width: 1234px;
            margin: 0 auto;
          }

          .we__call__Info {
            position: absolute;
            right: 0;
            top: -12rem;

            max-width: 26rem;

            background: rgba(255, 255, 255, 0.95);
            padding: 2rem;
            box-shadow: -10px 10px 30px rgba(0, 0, 0, 0.1);
          }

          .we__call__Info h2 {
            transform: skewY(0);
            font-size: 1.6rem;
            margin-bottom: 1rem;
            color: ${theme.color.mainColor};
          }

          .we__call__Info p {
            transform: skewY(0);
            font-size: 1rem;
            font-weight: 400;
            color: ${theme.color.mainTextColor};
          }

          .we__call__Info form {
            transform: skewY(0);
            grid-template-columns: 15rem auto;
            max-width: initial;
          }

          .we__Call-inputs {
            margin-top: 0.1rem;
            display: grid;
            gap: 1rem;
          }

          .we__call__Info input {
            height: 3rem;
            font-size: 0.9rem;
            padding-left: 1.2rem;
            letter-spacing: 0.05rem;
            border: 1px solid ${theme.color.mainColor};
          }

          .we__call__Info input::placeholder {
            color: ${theme.color.mainTextColor};
          }

          .send__button {
            align-self: flex-end;
            height: 3.1rem;
            font-size: 1rem;

            background: ${theme.color.mainLinear};
            outline: none;
            border: none;
          }

          .error__message {
            background: ${theme.color.mainLinear};
            margin: 0 0.5rem;
            font-size: 0.9rem;
            color: #fff;
            margin-top: 0rem;
          }

          .error__message:before {
            border-bottom: 10px solid ${theme.color.mainColor};
          }
        }
      `}</style>
    </section>
  );
}
