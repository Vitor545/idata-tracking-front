import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getAllTracking } from "../libs/api";

function TrackingCards() {
  const [trackings, setTracking] = useState([]);
  useEffect(() => {
    const getTrackings = async () => {
      const result = await getAllTracking();
      const setResult = new Set();
      const filterPerson = result.filter((tracking: any) => {
        const duplicatedTracking = setResult.has(tracking.awb);
        setResult.add(tracking.awb);
        return !duplicatedTracking;
      });
      return setTracking(filterPerson);
    };
    getTrackings();
  }, []);

  return (
    <div className="container card_container_page">
      {trackings.map(({ awb, type_company }: any) => (
        <Card awb={awb} type_company={type_company} />
      ))}
    </div>
  );
}

export default TrackingCards;
