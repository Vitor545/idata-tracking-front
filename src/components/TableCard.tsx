export default function TableCard() {
  return (
    <div className="table_container">
      <div className="table_card_header">
        <div className="table_card_awb">
          <div className="table_card_awb_header">
            <span>Código AWB</span>
          </div>
          <div className="card_awb_number table_card_awb_number">
            <div>
              <span>Prefixo</span>
              <h4>549</h4>
            </div>
            <div>
              <span>Número</span>
              <h4>25045802</h4>
            </div>
          </div>
        </div>
        <div className="table_card_awb2">
          <div className="table_header_date">
            <div>
              <span>Último Status</span>
              <h4>Shipment Delivered</h4>
            </div>
            <div>
              <span>Data da Consulta</span>
              <h4>21/07/2022</h4>
            </div>
          </div>
          <div className="table_header_button">
            <div>
              <span>Veja no Site da Compania</span>
              <h4>LATAM</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="table_card_body">
        <div className="table_card_block1">
          <div>
            <div>ORIGEM</div>
            <div className="table_card_block_secundary">GRU</div>
          </div>
          <div>
            <div>DESTINO</div>
            <div className="table_card_block_secundary">LIS</div>
          </div>
          <div>
            <div>FLIGHT NO</div>
            <div className="table_card_block_secundary">LA-8146</div>
          </div>
          <div>
            <div>ETD</div>
            <div className="table_card_block_secundary">
              01-Sep-2022<br></br> 17:43
            </div>
          </div>
        </div>
        <div className="table_card_block2">
          <div>
            <div>ETA</div>
            <div className="table_card_block_secundary">
              02-Sep-2022<br></br> 07:22
            </div>
          </div>
          <div>
            <div>PEÇAS</div>
            <div className="table_card_block_secundary">12</div>
          </div>
          <div>
            <div className="table_card_block_peso">PESO</div>
            <div
              className="table_card_block_secundary"
              style={{ borderRight: 0 }}
            >
              6426.0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
