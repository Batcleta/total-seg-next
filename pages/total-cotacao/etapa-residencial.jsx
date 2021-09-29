import Layout from "../../components/templates/Layout";
import styles from "../../styles/Cotacao.module.css";
import ContactButton from "../../components/ContactButton";

const Cotação = () => {
  const lStorage = "Casa ou Apartamento?";

  return (
    <div>
      <Layout>
        <div className={styles.main__text__wrapper}>
          <h2 className={styles.main__title}>
            Sua residência é <span>Casa </span>
            ou <span>Apartamento</span>?
          </h2>
        </div>

        <div className={styles.main__button}>
          <ContactButton
            lstorage={lStorage}
            image="residencia"
            link="residencial-etapa02"
            title="Casa"
          />

          <ContactButton
            lstorage={lStorage}
            image="apartamento"
            link="residencial-etapa02"
            title="Apartamento"
          />
        </div>
      </Layout>
    </div>
  );
};

export default Cotação;
