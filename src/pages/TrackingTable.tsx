import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTrackingById } from "../libs/api";
import TableCard from "../components/TableCard";
import Loading from "../components/Loading";

function TrackingCards() {
  const params = useParams();
  const [trackingId, setTrackingId] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const numerosDeRatreio = trackingId.length

  useEffect(() => {
    const getsById = async () => {
      const result = await getTrackingById(params.id as string);
      setIsLoading(false);
      return setTrackingId(result);
    };
    getsById();
  }, [params]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container table_container_page">
      {trackingId.map(
        ({
          awb,
          actual_k,
          actual_p,
          consultation_date,
          destination,
          origin,
          type_company,
          last_update,
          flight_no,
          etd,
          eta,
        }, index) => (
          <TableCard
            awb={awb}
            actual_k={actual_k}
            actual_p={actual_p}
            origin={origin}
            consultation_date={consultation_date}
            destination={destination}
            type_company={type_company}
            last_update={last_update}
            flight_no={flight_no}
            etd={etd}
            eta={eta}
            index={index}
            numerosDeRatreio={numerosDeRatreio}
            key={index}
          />
        )
      )}
    </div>
  );
}

export default TrackingCards;
