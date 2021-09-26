import Layout from "../../components/templates/Layout";
// import Image from "next/image";
import styles from "../../styles/Cotacao.module.css";
// import { useProgress } from "../../context/appContext";
// import { useRouter } from "next/router";
import ContactButton from "../../components/ContactButton";

const Cotação = () => {
  // const { setProgress } = useProgress();
  // const router = useRouter();

  // const nextEmpresarial = (value) => {
  //   localStorage.setItem(
  //     "Alarme para escritório, comércio ou residencia?",
  //     value
  //   );

  //   setProgress(localStorage.length);

  //   router.push(`/cotacao/segunda-etapa`);
  // };

  // const nextResidencial = (value) => {
  //   localStorage.setItem(
  //     "Alarme para escritório, comércio ou residencia?",
  //     value
  //   );

  //   setProgress(localStorage.length);

  //   router.push(`/cotacao/segunda-etapa`);
  // };

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
            lstorage="Alarme para escritório, comércio ou residencia?"
            image="residencia"
            link="segunda-etapa"
            title="Para minha Residência"
          />

          <ContactButton
            lstorage="Alarme para escritório, comércio ou residencia?"
            image="empresa"
            link="segunda-etapa"
            title="Para minha Empresa"
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
