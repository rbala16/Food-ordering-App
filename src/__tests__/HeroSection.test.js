import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HeroSection from "../components/HeroSection/HeroSection";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom";

// Mock `useNavigate` explicitly
const mockNavigate = jest.fn(); 
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

it("renders HeroSection and tests search functionality", () => {
  render(
    <MemoryRouter>
      <HeroSection />
    </MemoryRouter>
  );

  // Interact with the input and button
  const inputElement = screen.getByPlaceholderText(
    /search for restaurants name or your favourite food/i
  );
  fireEvent.change(inputElement, { target: { value: "Pizza" } });

  const findButton = screen.getByText(/find/i);
  fireEvent.click(findButton);

  // Ensure `navigate`function was called with the correct URL containing the search term "Pizza"
  expect(mockNavigate).toHaveBeenCalledWith("/restaurants?search=Pizza");
});

it("does not navigate if input is empty", () => {
  const history = createMemoryHistory();
  history.push = jest.fn();

  render(
    <Router location={history.location} navigator={history}>
      <HeroSection />
    </Router>
  );

  const findButton = screen.getByText(/find/i);
  fireEvent.click(findButton);

  // Ensure no navigation occurs
  expect(history.push).not.toHaveBeenCalled();
});
