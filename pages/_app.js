import "tailwindcss/tailwind.css";
import "../styles/global.scss";
import "../styles/font.scss";
import SafeHydrate from "../components/SafeHydrate";
import Meta from "../components/Meta";

function MyApp({ Component, pageProps }) {
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
