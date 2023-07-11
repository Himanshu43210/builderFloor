import "../public/assets/css/app.2afad0c.bundle.css";
import "../public/assets/css/swiper-custom.css";
import "../public/assets/css/custom.css";
import React, { useEffect, useState } from "react";
import { CookiesProvider } from "react-cookie";
import Preloader from "../components/elements/Preloader";
import "react-modal-video/css/modal-video.css";
import "../styles/globals.css";
import { Provider } from "react-redux";
import {store} from '../services/store';

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
  return (
    <>
      {!loading ? (
        <CookiesProvider>
          <Provider store={store} >

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
