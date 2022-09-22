export default function Card() {
  return (
    <div className="card_awb">
      <div className="card_awb_header">
        <span>Código AWB</span>
        <span>LATAM</span>
      </div>
      <div className="card_awb_number">
        <div>
          <span>Prefixo</span>
          <h4>549</h4>
        </div>
        <div>
          <span>Número</span>
          <h4>25045802</h4>
        </div>
      </div>
      <div className="card_awb_button">
        <div className="card_awb_button_arrow">
          <a>Nova Consulta</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-arrow-up-right"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </div>
        <button className="btn">Ver Rastreios</button>
      </div>
    </div>
  );
}
