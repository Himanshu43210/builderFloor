import "../public/assets/css/app.2afad0c.bundle.css";
import "../public/assets/css/swiper-custom.css";
import "../public/assets/css/custom.css";
import React, { useEffect, useState } from "react";
import { CookiesProvider } from "react-cookie";
import Preloader from "../components/elements/Preloader";
import "react-modal-video/css/modal-video.css";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../services/store";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  }, []);

  const GA_TRACKING_ID = "G-P43PLQ2NH2";

  return (
    <>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){
                dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '256091033813508');
              fbq('track', 'PageView');
            `,
          }}
        />
      </Head>
      {!loading ? (
        <CookiesProvider>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </CookiesProvider>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default MyApp;
