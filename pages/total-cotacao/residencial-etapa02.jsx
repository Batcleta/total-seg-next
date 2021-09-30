import Layout from "../../components/templates/Layout";
// import Image from "next/image";
import styles from "../../styles/Cotacao.module.css";
// import { useProgress } from "../../context/appContext";
// import { useRouter } from "next/router";
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

          {/* <div
            className={styles.button__wrapper}
            onClick={(e) => nextEmpresarial(e.target.innerText)}
          >
            <div className="button__icon">
              <Image
                src={`/cotacao/${"empresa"}-ico.svg`}
                alt={"empresa"}
                width={28.83}
                height={27.56}
                layout="responsive"
              />
            </div>
            <h3>Para minha Empresa</h3>
          </div> */}

          {/* <div
            className={styles.button__wrapper}
            onClick={(e) => nextResidencial(e.target.innerText)}
          >
            <div className="button__icon">
              <Image
                src={`/cotacao/${"residencia"}-ico.svg`}
                alt={"residencia"}
                width={28.83}
                height={27.56}
                layout="responsive"
              />
            </div>
            <h3>Para minha Residência</h3>
          </div> */}
        </div>
      </Layout>
    </div>
  );
};

export default Cotação;
