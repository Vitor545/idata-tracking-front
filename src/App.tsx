import Header from "./components/Header";
import Hero from "./components/Hero";
import TextInfinite from "./components/TextInfinite";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Hero />
      <TextInfinite />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
