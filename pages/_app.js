import 'tailwindcss/tailwind.css'
import '../styles/global.scss'
import '../styles/font.scss'
import SafeHydrate from "../components/SafeHydrate";

function MyApp({ Component, pageProps }) {
  return (
    <SafeHydrate>
      <Component {...pageProps} />
    </SafeHydrate>
  ) 
}

export default MyApp
