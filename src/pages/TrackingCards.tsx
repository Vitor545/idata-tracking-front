import { useEffect, useState } from "react";
import Card from "../components/Card";
import Loading from "../components/Loading";
import { getAllTracking } from "../libs/api";

function TrackingCards() {
  const [trackings, setTracking] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getTrackings = async () => {
      const result = await getAllTracking();
      const setResult = new Set();
      const filterPerson = result.filter((tracking: any) => {
        const duplicatedTracking = setResult.has(tracking.awb);
        setResult.add(tracking.awb);
        return !duplicatedTracking;
      });
      setIsLoading(false);
      return setTracking(filterPerson);
    };
    getTrackings();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container card_container_page">
      {trackings.map(({ awb, type_company }: any) => (
        <Card awb={awb} type_company={type_company} />
      ))}
    </div>
  );
}

export default TrackingCards;
