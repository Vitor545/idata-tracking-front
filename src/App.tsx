import Header from "./components/Header";
import Hero from "./components/Hero";
import TextInfinite from "./components/TextInfinite";
import Home from "./pages/Home";
import TrackingCards from "./pages/TrackingCards";
import TrackingTable from "./pages/TrackingTable";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <TextInfinite />
      <TrackingTable />
    </div>
  );
}

export default App;
