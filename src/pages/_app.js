import Theme from "../styles/theme";
import Head from "next/head";

// export function reportWebVitals(metric) {
//   console.log("metric==>", metric);
// }

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Vaibhav Patel - FullStack Developer</title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
