import { Suspense } from 'react'
import "tailwindcss/tailwind.css";
import "../styles/global.scss";
import "../styles/font.scss";
import SafeHydrate from "../components/SafeHydrate";
import Meta from "../components/Meta";
import LoadingPage from "./loading";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <SafeHydrate>
      <Suspense fallback={<LoadingPage />}>
        <Component {...pageProps} />
      </Suspense>
      </SafeHydrate>
    </>
  );
}

export default MyApp;
