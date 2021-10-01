import Layout from "../../components/templates/Layout";
import styles from "../../styles/Cotacao.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";

const Cotação = () => {
  const router = useRouter();

  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    let storage = {};

    for (let [key, value] of Object.entries(localStorage)) {
      storage[`${key}`] = value;
    }
    let fullData = { ...storage, ...data };

    axios.post("/api/sendEmailMessage", fullData).then(console.log);

    router.push(`/obrigado`);
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
                name="nome"
                type="text"
                {...register("nome", { required: true })}
              />
              {errors.nome && (
                <small className={styles.error__message}>
                  Por Favor informe seu nome
                </small>
              )}
            </>
            <>
              <input
                placeholder="( xx ) x xxxx-xxxx"
                name="contato"
                type="tel"
                {...register("contato", {
                  required: true,
                  pattern: /([0-9]{2,3})?([0-9]{2})([0-9]{4,5})([0-9]{4})/,
                })}
              />
              {errors.contato && (
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
