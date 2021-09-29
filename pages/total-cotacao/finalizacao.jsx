import Layout from "../../components/templates/Layout";
import styles from "../../styles/Cotacao.module.css";
// import { useProgress } from "../../context/appContext";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const Cotação = () => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    return isAddMode ? createUser(data) : updateUser(user.id, data);
  }

  const lStorage = `Sua residência ou a de algum vizinho, foi roubada recentemente?`;

  return (
    <div>
      <Layout>
        <div className={styles.finaliza__text__wrapper}>
          <h2 className={styles.finaliza__title}>
            Para que possamos salvar e enviar seu orçamento,{" "}
            <span>informe seu nome e um número para contato</span>
          </h2>
        </div>

        <div className={styles.input__wrapper}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <>
              <input
                placeholder="Informe seu nome"
                name="name"
                type="text"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <small className={styles.error__message}>
                  Por Favor informe seu nome
                </small>
              )}
            </>
            <>
              <input
                placeholder="Informe um um telefone"
                name="phone"
                type="tel"
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <small className={styles.error__message}>
                  Por Favor informe um telefone
                </small>
              )}
            </>
            <button>Enviar</button>
          </form>
        </div>

        <small className={styles.privacity__message}>
          Todas as suas informações são confidênciais e estão protegidas por
          nossa <a>política de privaciadade</a>. Serão usadas apenas para
          análise interna de nossos especialistas a fim de proporcionar uma
          experiência personalizada com o seu novo sistema de alarmes
        </small>
      </Layout>
    </div>
  );
};

export default Cotação;
