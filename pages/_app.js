import Layout from "../components/layout";
import GlobalStyle from "../components/globalStyles";
function MyApp({ Component, pageProps }) {
  return (
    <>
    <GlobalStyle/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
