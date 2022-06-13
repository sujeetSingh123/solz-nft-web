import React from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
