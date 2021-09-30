import "../styles/globals.css";
import Head from "next/head";
import { AppWrapper } from "../context/appContext";

import { gtmVirtualPageView } from "../lib/gtm";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const mainDataLayer = {
      pageTypeName: pageProps.page || null,
      url: router.pathname,
    };

    window.onload = () => window.dataLayer?.push({ ...mainDataLayer });

    gtmVirtualPageView(mainDataLayer);
  }, [pageProps]);

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
