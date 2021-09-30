import Layout from "../../components/templates/Layout";
import styles from "../../styles/Cotacao.module.css";
import ContactButton from "../../components/ContactButton";
import { useEffect, useState } from "react";

const Cotação = () => {
  const [getLs, setLs] = useState();

  useEffect(() => {
    setLs(localStorage.getItem("Casa ou Apartamento?"));
  }, []);

  const lStorage = `${getLs} possui ${
    getLs === "Casa" ? "quintal" : "sacada compartilhada"
  }? `;

  return (
    <div>
      <Layout>
        <div className={styles.main__text__wrapper}>
          {getLs === "Casa" ? (
            <h2 className={styles.main__title}>
              Sua casa possui <span>Quintal</span>?
            </h2>
          ) : (
            <h2 className={styles.main__title}>
              Seu apartamento possui <span>Sacada compartilhada</span>?
            </h2>
          )}
        </div>

        <div className={styles.main__button}>
          <ContactButton
            lstorage={lStorage}
            image="positive"
            link="residencial-etapa03"
            title="Sim"
          />

          <ContactButton
            lstorage={lStorage}
            image="negative"
            link="residencial-etapa03"
            title="Não"
          />
        </div>
      </Layout>
    </div>
  );
};

export default Cotação;
