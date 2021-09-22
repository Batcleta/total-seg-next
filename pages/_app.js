import "../styles/globals.css";
import Head from "next/head";
import { AppWrapper } from "../context/appContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Washington Ferreira" />
        <meta name="googlebot" content="index, follow"></meta>
        <meta name="robots" content="index, follow" />
      </Head>

      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </>
  );
}

export default MyApp;
