export type PropsTable = {
  awb: string;
  actual_k: string;
  actual_p: string;
  consultation_date: string;
  destination: string;
  origin: string;
  type_company: string;
  last_update: string;
  flight_no: string;
  etd: string;
  eta: string;
  index: number;
  numerosDeRatreio: number;
};

export default function TableCard({
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
  index,
  numerosDeRatreio,
}: PropsTable) {
  const links: any = {
    LATAM: `https://www.latamcargo.com/en/trackshipment?docNumber=${awb.substr(
      3,
      8
    )}&docPrefix=${awb.substr(0, 3)}`,
    UNITED: `https://www.unitedcargo.com/en/us/track/awb/016-${awb.substr(
      3,
      8
    )}`,
  };
  const formatDate = (data: string, dateHors: boolean = false) => {
    let dataConsulta = new Date(data);
    let dataConsultaFormatada =
      dataConsulta.getDate() +
      "/" +
      (dataConsulta.getMonth() + 1) +
      "/" +
      dataConsulta.getFullYear();
    const minutes =
      dataConsulta.getMinutes() < 10
        ? "0" + dataConsulta.getMinutes()
        : dataConsulta.getMinutes();
    if (dateHors) {
      return (dataConsultaFormatada +=
        "-" + dataConsulta.getHours() + ":" + minutes);
    }
    return dataConsultaFormatada;
  };

  return (
    <div className="table_container" data-testid="table_card">
      <div className="table_card_header">
        <div className="table_card_awb">
          <div className="table_card_awb_header">
            <span>Código AWB</span>
            {numerosDeRatreio - 1 === index && (
              <span className="spanLast">Último Rastreio</span>
            )}
          </div>
          <div className="card_awb_number table_card_awb_number">
            <div>
              <span>Prefixo</span>
              <h4>{awb.substr(0, 3)}</h4>
            </div>
            <div>
              <span>Número</span>
              <h4>{awb.substr(3, 8)}</h4>
            </div>
          </div>
        </div>
        <div className="table_card_awb2">
          <div className="table_header_date">
            <div data-testid="table_card_last_status">
              <span>Último Status</span>
              <h4>{last_update}</h4>
            </div>
            <div data-testid="table_card_date_consult">
              <span>Data da Consulta</span>
              <h4>{consultation_date}</h4>
            </div>
          </div>
          <div className="table_header_button">
            <div onClick={() => window.open(links[type_company], "_blank")}>
              <span>Veja no Site da Compania</span>
              <h4>{type_company}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="table_card_body">
        <div className="table_card_block1">
          <div>
            <div>ORIGEM</div>
            <div
              data-testid="table_card_origin"
              className="table_card_block_secundary"
            >
              {origin}
            </div>
          </div>
          <div>
            <div>DESTINO</div>
            <div
              data-testid="table_card_destination"
              className="table_card_block_secundary"
            >
              {destination}
            </div>
          </div>
          <div>
            <div>FLIGHT NO</div>
            <div
              data-testid="table_card_flight"
              className="table_card_block_secundary"
            >
              {flight_no}
            </div>
          </div>
          <div>
            <div>ETD</div>
            <div
              className="table_card_block_secundary"
              data-testid="table_card_etd"
            >
              {formatDate(etd, true).substring(0, 8)} <br></br>
              {formatDate(etd, true).substring(9, 14)}
            </div>
          </div>
        </div>
        <div className="table_card_block2">
          <div>
            <div>ETA</div>
            <div
              className="table_card_block_secundary"
              data-testid="table_card_eta"
            >
              {formatDate(eta, true).substring(0, 8)} <br></br>
              {formatDate(eta, true).substring(9, 14)}
            </div>
          </div>
          <div>
            <div>PEÇAS</div>
            <div
              className="table_card_block_secundary"
              data-testid="table_card_pieces"
            >
              {actual_p}
            </div>
          </div>
          <div>
            <div className="table_card_block_peso">PESO</div>
            <div
              className="table_card_block_secundary"
              style={{ borderRight: 0 }}
              data-testid="table_card_weight"
            >
              {actual_k}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
