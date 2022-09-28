import React from "react";
import { render, waitFor } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

describe("Testa pagina TableTracking da Aplicação", () => {
  test("Vai para tela que tem a tabela", async () => {
    const { getAllByTestId, getByTestId, getAllByText } = render(<App />);
    const buttonHeader = getByTestId("button_header");
    userEvent.click(buttonHeader);
    await waitFor(async () => {
      const card = getAllByTestId("card_tracking");
      expect(card).toBeInTheDocument;
      const cardButton = getAllByText("Ver Rastreios");
      expect(cardButton).toBeInTheDocument;
      userEvent.click(cardButton[0]);
    });
  });

  test("Testa se a pagina tem table", async () => {
    const { getAllByTestId } = render(<App />);
    await waitFor(async () => {
      const table = getAllByTestId("table_card");
      expect(table).toBeInTheDocument;
    });
  });

  test("Testa se a table tem o último status", async () => {
    const { getAllByTestId } = render(<App />);
    await waitFor(async () => {
      const table_last_status = getAllByTestId("table_card_last_status");
      expect(table_last_status).toBeInTheDocument;
    });
  });

  test("Testa se a table tem a data de consulta", async () => {
    const { getAllByTestId } = render(<App />);
    await waitFor(async () => {
      const table_consult_date = getAllByTestId("table_card_date_consult");
      expect(table_consult_date).toBeInTheDocument;
    });
  });

  test("Testa se a table tem a origem", async () => {
    const { getAllByTestId, getAllByText } = render(<App />);
    await waitFor(async () => {
      const table_origin = getAllByTestId("table_card_origin");
      const table_origin_text = getAllByText("ORIGEM");
      expect(table_origin).toBeInTheDocument;
      expect(table_origin_text).toBeInTheDocument;
    });
  });

  test("Testa se a table tem o destino", async () => {
    const { getAllByTestId, getAllByText } = render(<App />);
    await waitFor(async () => {
      const table_destination = getAllByTestId("table_card_destination");
      const table_destination_text = getAllByText("DESTINO");
      expect(table_destination).toBeInTheDocument;
      expect(table_destination_text).toBeInTheDocument;
    });
  });

  test("Testa se a table tem o flight", async () => {
    const { getAllByTestId, getAllByText } = render(<App />);
    await waitFor(async () => {
      const table_flight = getAllByTestId("table_card_flight");
      const table_flight_text = getAllByText("FLIGHT NO");
      expect(table_flight).toBeInTheDocument;
      expect(table_flight_text).toBeInTheDocument;
    });
  });

  test("Testa se a table tem o ETD", async () => {
    const { getAllByTestId, getAllByText } = render(<App />);
    await waitFor(async () => {
      const table_etd = getAllByTestId("table_card_etd");
      const table_etd_text = getAllByText("ETD");
      expect(table_etd).toBeInTheDocument;
      expect(table_etd_text).toBeInTheDocument;
    });
  });

  test("Testa se a table tem o ETA", async () => {
    const { getAllByTestId, getAllByText } = render(<App />);
    await waitFor(async () => {
      const table_eta = getAllByTestId("table_card_eta");
      const table_eta_text = getAllByText("ETA");
      expect(table_eta).toBeInTheDocument;
      expect(table_eta_text).toBeInTheDocument;
    });
  });

  test("Testa se a table tem as peças", async () => {
    const { getAllByTestId, getAllByText} = render(<App />);
    await waitFor(async () => {
      const table_pieces = getAllByTestId("table_card_pieces");
      const table_pieces_text = getAllByText("PEÇAS");
      expect(table_pieces).toBeInTheDocument;
      expect(table_pieces_text).toBeInTheDocument;
    });
  });

  test("Testa se a table tem o peso", async () => {
    const { getAllByTestId, getAllByText } = render(<App />);
    await waitFor(async () => {
      const table_weight = getAllByTestId("table_card_weight");
      const table_weight_text = getAllByText("PESO");
      expect(table_weight).toBeInTheDocument;
      expect(table_weight_text).toBeInTheDocument;
    });
  });
});
