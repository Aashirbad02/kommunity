import "../styles/globals.css";
import type { AppProps } from "next/app";
import "regenerator-runtime/runtime";
import "../Components/Feature/Feature.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
