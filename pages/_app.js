import Head from "next/head";
import { Inter } from "@next/font/google";
import Layout from "../components/Layout";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>methical by Goldy Mariz Lunesa @gmlunesa</title>
      </Head>
      <style jsx global>
        {`
          :root {
            --inter-font: ${inter.style.fontFamily};
          }
        `}
      </style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
