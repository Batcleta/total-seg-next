import Layout from "../../components/templates/Layout";
import styles from "../../styles/Cotacao.module.css";
import { useProgress } from "../../context/appContext";
import ContactButton from "../../components/ContactButton";
import { useEffect } from "react";

const Cotação = () => {
  const lStorage = "Alarme para escritório, comércio ou residencia?";

  const { setProgress } = useProgress();

  useEffect(() => {
    localStorage.clear();
    setProgress(1);
  }, []);

  return (
    <div>
      <Layout>
        <div className={styles.main__text__wrapper}>
          <h2 className={styles.main__title}>
            Alarme para sua <span>empresa </span>
            ou <span>residência</span>?
          </h2>
        </div>

        <div className={styles.main__button}>
          <ContactButton
            lstorage={lStorage}
            image="residencia"
            link="etapa-residencial"
            title="Para minha Residência"
          />

          <ContactButton
            lstorage={lStorage}
            image="empresa"
            link="etapa-empresarial"
            title="Para minha Empresa"
          />
        </div>
      </Layout>
    </div>
  );
};

export default Cotação;
