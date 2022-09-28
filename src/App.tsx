import Header from "./components/Header";
import Hero from "./components/Hero";
import TextInfinite from "./components/TextInfinite";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <TextInfinite />
      <Routes />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </BrowserRouter>
  );
}

export default App;
