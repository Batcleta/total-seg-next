import { useState } from "react";
import { useForm } from "react-hook-form";
import theme from "../styles/Theme";
import SiteMenu from "../components/Menu";

export default function ClientArea() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const [login, setLogin] = useState(false);

  const onSubmit = (data) => {
    setLogin(true);
  };

  return (
    <div>
      <SiteMenu />
      <div className="client__wrapper">
        <div className="client__area">
          <div className="client__title">Area do cliente</div>

          <form onSubmit={handleSubmit(onSubmit)} className="client__form">
            <div className="form__group">
              <label>Login</label>
              <input
                type="text"
                name="login"
                placeholder="Informe seu login"
                {...register("login", { required: true })}
              />
              {errors.login && (
                <small className="error__message">
                  Informe um login válido
                </small>
              )}
            </div>

            <div className="form__group">
              <label>Senha</label>
              <input
                type="password"
                name="pass"
                placeholder="************"
                {...register("pass", { required: true })}
              />
              {errors.pass && (
                <small className="error__message">
                  Informe uma senha válida
                </small>
              )}
            </div>

            <button type="submit">Entrar</button>
          </form>
          {!login ? (
            ""
          ) : (
            <small className="error__message">Login ou senha inválidos</small>
          )}
        </div>
      </div>

      <style jsx>{`
        .client__wrapper {
          width: 100vw;
          height: 100vh;

          display: grid;
          justify-content: center;
          align-content: center;

          background-color: #fcfcfc;
        }

        .client__area {
          display: grid;
          gap: 3rem;
          width: 20rem;

          padding: 2rem 1.5rem;
          border-radius: 1rem;
          background-color: rgba(255, 255, 255, 1);
          box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
        }

        .client__title {
          font-size: 1.5rem;
          font-weight: 700;
          text-align: center;
        }

        .client__form {
          display: grid;
          gap: 1.2rem;
        }

        .form__group {
          display: grid;
          gap: 0.8rem;
        }

        .form__group label {
          padding-left: 0.5rem;
          font-weight: 600;
        }

        .client__form input {
          height: 3rem;

          background: rgba(196, 196, 196, 0.1);
          border: 1px solid #ff0015;
          box-sizing: border-box;
          border-radius: 01rem;
          padding-left: 1rem;
        }

        .client__form button {
          height: 3.5rem;
          margin-top: 1rem;

          background: #ff0015;
          border-radius: 1rem;

          color: white;
          font-size: 1rem;
          border: none;

          transition: 0.3s;
          cursor: pointer;
        }

        .client__form button:hover {
          transform: scale(1.05);
        }

        .error__message {
          position: relative;
          padding: 0.8rem;
          background: ${theme.color.mainColor};
          margin: 0.5rem;
          font-size: 0.9rem;
          color: #fff;
          border-radius: 0.6rem;
          margin-top: ;
        }

        .error__message:before {
          content: "";
          width: 0px;
          height: 0px;
          position: absolute;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 10px solid transparent;
          border-bottom: 10px solid ${theme.color.mainColor};
          left: 19px;
          top: -19px;
        }
      `}</style>
    </div>
  );
}
