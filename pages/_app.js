import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import "antd/dist/antd.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer position="top-center" />
      <TopNav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
