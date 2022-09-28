import React from "react";
import { render, waitFor } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

describe("Testa pagina Home da Aplicação", () => {
  test("Testa se a pagina tem um input prefixo", async () => {
    const { getByText, getByTestId } = render(<App />);
    const prefixoLabel = getByText("Prefixo");
    const prefixoInput = getByTestId("input_prefix");
    expect(prefixoLabel).toBeInTheDocument;
    expect(prefixoInput).toBeInTheDocument;
  });

  test("Testa se a pagina tem um input Número", async () => {
    const { getByText, getByTestId } = render(<App />);
    const numberLabel = getByText("Número");
    const numberInput = getByTestId("input_number");
    expect(numberLabel).toBeInTheDocument;
    expect(numberInput).toBeInTheDocument;
  });

  test('Testa se a pagina tem um botão "Rastrear"', async () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId("button_form_create");
    expect(button).toBeInTheDocument;
  });

  test('Testa se é possivel criar um rastreio com um awb válido"', async () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId("button_form_create");
    const prefixoInput = getByTestId("input_prefix");
    const numberInput = getByTestId("input_number");
    userEvent.type(prefixoInput, "549");
    userEvent.type(numberInput, "29614550");
    userEvent.click(button);
    const { getAllByTestId } = render(<App />);
    await waitFor(async () => {
      setTimeout(() => {
        const table = getAllByTestId("table_card");
        expect(table).toBeInTheDocument;
      }, 10000)
    });
  });
  });
