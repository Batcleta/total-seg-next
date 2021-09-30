import Layout from "../../components/templates/Layout";
import styles from "../../styles/Cotacao.module.css";
import ContactButton from "../../components/ContactButton";
import { useEffect, useState } from "react";

const Cotação = () => {
  const [getLs, setLs] = useState();

  useEffect(() => {}, []);

  const lStorage = `Sua empresa ou alguma proxima,
  foi roubada recentemente?`;

  return (
    <div>
      <Layout>
        <div className={styles.main__text__wrapper}>
          <h2 className={styles.main__title}>
            Sua empresa ou alguma empresa proxima, foi roubada recentemente?
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
