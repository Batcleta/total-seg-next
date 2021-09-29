import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Obrigado = () => {
  const router = useRouter();

  // useEffect(() => {
  //   setTimeout(() => router.push("/"), 5000);
  // });

  return (
    <div className="thanks__wrapper">
      <div className="thanks__image logo">
        <Image
          src={"/web-menu-logo.svg"}
          alt="logo total segurança"
          width={241}
          height={78}
          layout={"responsive"}
        />
      </div>

      <h1 className="thanks__title">Obrigado por escolher a total segurança</h1>

      <div className="thanks__image check">
        <Image
          src={"/thanks/thanks-check-image.svg"}
          alt="logo total segurança"
          width={95}
          height={95}
          layout={"responsive"}
        />
      </div>

      <h3 className="thanks__subtitle">
        Em poucos minutos,
        <span> um especialista entrará em contato com você</span>
      </h3>

      <div className="redirect__button" onClick={() => router.push("/")}>
        Voltar ao ao site{" "}
      </div>

      <style jsx>{`
        .thanks__image.logo {
          max-width: 15.0625em;
        }

        .thanks__title {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 120%;
        }

        .thanks__image.check {
          max-width: 5.9375em;
        }

        .thanks__subtitle {
          line-height: 130%;
        }

        .thanks__subtitle span {
          font-weight: 700;
        }
      `}</style>
    </div>
  );
};

export default Obrigado;
