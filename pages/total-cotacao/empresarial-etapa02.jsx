import Layout from "../../components/templates/Layout";
// import Image from "next/image";
import styles from "../../styles/Cotacao.module.css";
// import { useProgress } from "../../context/appContext";
// import { useRouter } from "next/router";
import ContactButton from "../../components/ContactButton";
import { useEffect, useState } from "react";

const Cotação = () => {
  const [getLs, setLs] = useState();

  useEffect(() => {}, []);

  const lStorage = `Quantos funcionários sua empresa possui?2`;

  return (
    <div>
      <Layout>
        <div className={styles.main__text__wrapper}>
          <h2 className={styles.main__title}>
            Quantos funcionários sua empresa possui?
          </h2>
        </div>

        <div className={styles.main__button}>
          <ContactButton
            lstorage={lStorage}
            image="1funcionario"
            link="empresarial-etapa03"
            title="1 Funcionário"
          />

          <ContactButton
            lstorage={lStorage}
            image="2-5funcionarios"
            link="empresarial-etapa03"
            title="De 2 a 5 funcionários"
          />

          <ContactButton
            lstorage={lStorage}
            image="maisde5funcionarios"
            link="empresarial-etapa03"
            title="Mais do que 5 funcionários"
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
