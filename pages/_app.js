import SafeHydrate from "components/SafeHydrate";
import Meta from "../components/Meta";
import "tailwindcss/tailwind.css";
import "../styles/global.scss";
import "../styles/font.scss"
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import React, { useRef } from "react";
function MyApp({ Component, pageProps }) {
  const containerRef = useRef(null);
  const { scroll } = useLocomotiveScroll();
  return (
    <>
      <Meta />
    
      <LocomotiveScrollProvider
       options={{
        smooth: true,
        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
      >
         <SafeHydrate>
      <main data-scroll-container ref={containerRef}>
        <Component {...pageProps} />
        </main>
        </SafeHydrate>
      </LocomotiveScrollProvider>
   
    </>
  );
}

export default MyApp;
