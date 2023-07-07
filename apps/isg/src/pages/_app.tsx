import "@/styles/globals.css";
import "@/styles/texts.css";
import "@/styles/about.css";
import "@/styles/animator.css";
import "@/styles/bdp.css";
import "@/styles/scrollToTop.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
