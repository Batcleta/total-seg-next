import Layout from "../../components/templates/Layout";
import styles from "../../styles/Cotacao.module.css";
import ContactButton from "../../components/ContactButton";
import { useEffect } from "react";

const Cotação = () => {
  useEffect(() => {}, []);

  const lStorage = `Sua residência ou a de algum vizinho, foi roubada recentemente?`;

  return (
    <div>
      <Layout>
        <div className={styles.main__text__wrapper}>
          <h2 className={styles.main__title}>
            Sua residência ou a de algum vizinho, foi{" "}
            <span>roubada recentemente?</span>
          </h2>
        </div>

        <div className={styles.main__button}>
          <ContactButton
            lstorage={lStorage}
            image="positive"
            link="finalizacao"
            title="Sim"
          />

          <ContactButton
            lstorage={lStorage}
            image="negative"
            link="finalizacao"
            title="Não"
          />
        </div>
      </Layout>
    </div>
  );
};

export default Cotação;
