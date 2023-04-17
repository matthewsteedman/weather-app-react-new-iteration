import "@/styles/globals.css";
import { Provider } from "@/context/weather";
export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}
