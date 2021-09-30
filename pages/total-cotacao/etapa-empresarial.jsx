import Layout from "../../components/templates/Layout";
import styles from "../../styles/Cotacao.module.css";
import ContactButton from "../../components/ContactButton";
import { useEffect, useState } from "react";

const Cotação = () => {
  const [getLs, setLs] = useState();

  useEffect(() => {}, []);

  const lStorage = `Como você clasifica sua empresa? `;

  return (
    <div>
      <Layout>
        <div className={styles.main__text__wrapper}>
          <h2 className={styles.main__title}>
            Como você clasifica sua empresa?
          </h2>
        </div>

        <div className={styles.main__button}>
          <ContactButton
            lstorage={lStorage}
            image="industria"
            link="empresarial-etapa02"
            title="Fábrica ou Galpão "
          />

          <ContactButton
            lstorage={lStorage}
            image="empresa"
            link="empresarial-etapa02"
            title="Escritório"
          />

          <ContactButton
            lstorage={lStorage}
            image="comercio"
            link="empresarial-etapa02"
            title="Comércio"
          />
        </div>
      </Layout>
    </div>
  );
};

export default Cotação;
