import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import "../index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
