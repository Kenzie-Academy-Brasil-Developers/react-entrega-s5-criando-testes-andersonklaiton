import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { LocateCepProvider } from "../../../providers/CepProvider";
import api from "../../../services";
import MockAdapter from "axios-mock-adapter";
import App from "../../../App";


const mockApi = new MockAdapter(api);

describe("Render App page", () => {
  test("should get information by cep", () => {
    mockApi.onGet("88343462").replyOnce(200, {
      logradouro: "Rua Rio das Flores",
      bairro: "Rio Pequeno",
      cidade: "Camboriú",
      estado: "SC",
      cep: "88343462",
    });
  });

  render(
    <LocateCepProvider>
      <App />
    </LocateCepProvider>
  );

  const cepInput = screen.getByPlaceholderText("Insira o CEP");
  const cepButton = screen.getByRole("button");

  fireEvent.change(cepInput, { target: { value: "88343462" } });
  fireEvent.click(cepButton);

  // eslint-disable-next-line testing-library/await-async-utils
  waitFor(() => {
    expect(screen.getByDisplayValue("Rua Rio das Flores")).toBeInTheDocument();
  });
});
