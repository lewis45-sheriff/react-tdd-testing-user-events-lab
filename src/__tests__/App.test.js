import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

// Initial State Tests
test("the form includes text inputs for name and email address", () => {
  render(<App />);

  const nameInput = screen.getByPlaceholderText("Your Name");
  const emailInput = screen.getByPlaceholderText("Your Email");

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});

test("the form includes three checkboxes to select areas of interest", () => {
  render(<App />);

  const reactCheckbox = screen.getByLabelText("React");
  const jsCheckbox = screen.getByLabelText("JavaScript");
  const cssCheckbox = screen.getByLabelText("CSS");

  expect(reactCheckbox).toBeInTheDocument();
  expect(jsCheckbox).toBeInTheDocument();
  expect(cssCheckbox).toBeInTheDocument();
});

test("the checkboxes are initially unchecked", () => {
  render(<App />);

  const reactCheckbox = screen.getByLabelText("React");
  const jsCheckbox = screen.getByLabelText("JavaScript");
  const cssCheckbox = screen.getByLabelText("CSS");

  expect(reactCheckbox).not.toBeChecked();
  expect(jsCheckbox).not.toBeChecked();
  expect(cssCheckbox).not.toBeChecked();
});

// User Interaction Tests
test("the page shows information the user types into the name and email address form fields", () => {
  render(<App />);

  const nameInput = screen.getByPlaceholderText("Your Name");
  const emailInput = screen.getByPlaceholderText("Your Email");

  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "john@example.com" } });

  expect(nameInput.value).toBe("John Doe");
  expect(emailInput.value).toBe("john@example.com");
});

test("checked status of checkboxes changes when user clicks them", () => {
  render(<App />);

  const reactCheckbox = screen.getByLabelText("React");
  const jsCheckbox = screen.getByLabelText("JavaScript");
  const cssCheckbox = screen.getByLabelText("CSS");

  fireEvent.click(reactCheckbox);
  fireEvent.click(jsCheckbox);

  expect(reactCheckbox).toBeChecked();
  expect(jsCheckbox).toBeChecked();
  expect(cssCheckbox).not.toBeChecked();
});

test("a message is displayed when the user clicks the Submit button", () => {
  render(<App />);

  const nameInput = screen.getByPlaceholderText("Your Name");
  const emailInput = screen.getByPlaceholderText("Your Email");
  const submitButton = screen.getByText("Submit");

  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "john@example.com" } });
  fireEvent.click(submitButton);

  const thankYouMessage = screen.getByText(/thank you, john doe, for subscribing!/i);

  expect(thankYouMessage).toBeInTheDocument();
});
