import SafeHydrate from "components/SafeHydrate";
import Meta from "../components/Meta";
import "tailwindcss/tailwind.css";
import "../styles/global.scss";
import "../styles/font.scss";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import React, { useRef } from "react";
function MyApp({ Component, pageProps }) {
  const containerRef = useRef(null);
  const { scroll } = useLocomotiveScroll();
  return (
    <>
      <Meta />

        <SafeHydrate>
            <Component {...pageProps} />
        </SafeHydrate>
    
   
    </>
  );
}

export default MyApp;
