import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTrackingById } from "../libs/api";
import TableCard from "../components/TableCard";

function TrackingCards() {
  const params = useParams();
  const [trackingId, setTrackingId] = useState([]);
  useEffect(() => {
    const getsById = async () => {
      const result = await getTrackingById(params.id as string);
      return setTrackingId(result);
    };
    getsById();
  }, [params]);

  console.log(trackingId);
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
        }) => (
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
          />
        )
      )}
    </div>
  );
}

export default TrackingCards;
