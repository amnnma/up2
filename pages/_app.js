import SafeHydrate from "components/SafeHydrate";
import Meta from "../components/Meta";
import { ResultContextProvider } from "../components/util/ResultContext"
import "tailwindcss/tailwind.css";
import "../styles/global.scss";
import "../styles/font.scss"


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <SafeHydrate>
        <ResultContextProvider>
        <Component {...pageProps} />
        </ResultContextProvider>
      </SafeHydrate>
    </>
  );
}

export default MyApp;
