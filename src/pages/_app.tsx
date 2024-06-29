import { AppProvider } from "@/data/context/AppContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Tailwind from "primereact/passthrough/tailwind";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrimeReactProvider value={{ pt: Tailwind }}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </PrimeReactProvider>
  );
}
