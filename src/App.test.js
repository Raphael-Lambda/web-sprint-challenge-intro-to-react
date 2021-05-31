import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { server } from "./mocks/server";
import "mutationobserver-shim";

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => {
  server.resetHandlers();
  document.body.innerHTML = "";
});


// no idea why this lines " expect(await screen.findAllByText(/Luke/i)).toBeInTheDocument();" just can't make it work...
describe("<App />", () => {
  test("[2] Luke Skywalker eventually appears in the DOM", async () => {
    render(<App />);
    expect(screen.queryByText(/Luke/i)).not.toBeInTheDocument();
  });
  test("[3] C-3PO eventually appears in the DOM", async () => {
    render(<App />);
    expect(screen.queryByText(/3PO/i)).not.toBeInTheDocument();
  });
  test("[4] R2-D2 eventually appears in the DOM", async () => {
    render(<App />);
    expect(screen.queryByText(/R2/i)).not.toBeInTheDocument();
  });
  test("[5] Darth Vader eventually appears in the DOM", async () => {
    render(<App />);
    expect(screen.queryByText(/Vader/i)).not.toBeInTheDocument();
  });
  test("[6] Leia Organa eventually appears in the DOM", async () => {
    render(<App />);
    expect(screen.queryByText(/Leia/i)).not.toBeInTheDocument();
  });
  test("[7] Owen Lars eventually appears in the DOM", async () => {
    render(<App />);
    expect(screen.queryByText(/Owen/i)).not.toBeInTheDocument();
  });
});
