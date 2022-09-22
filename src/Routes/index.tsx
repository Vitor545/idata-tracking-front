import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import TrackingCards from "../pages/TrackingCards";
import TrackingTable from "../pages/TrackingTable";

const RoutesComponents = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/tracking" element={<TrackingCards/>}/>
      <Route path="/tracking/:id" element={<TrackingTable/>}/>
    </Routes>
  );
};

export default RoutesComponents;
