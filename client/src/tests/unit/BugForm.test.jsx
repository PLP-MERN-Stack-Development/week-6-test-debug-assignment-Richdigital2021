// tests/BugForm.test.jsx
import { render, screen } from "@testing-library/react";
import BugForm from "../src/components/BugForm";

test("renders bug form", () => {
  render(<BugForm />);
  expect(screen.getByPlaceholderText("Bug title")).toBeInTheDocument();
});
test("submits form with title and description", () => {
  render(<BugForm />);

  const titleInput = screen.getByPlaceholderText("Bug title");
  const descriptionInput = screen.getByPlaceholderText("Bug description");
  const submitButton = screen.getByRole("button", { name: "Submit" });

  titleInput.value = "Test Bug";
  descriptionInput.value = "This is a test bug description";

  submitButton.click();

  expect(titleInput.value).toBe("Test Bug");
  expect(descriptionInput.value).toBe("This is a test bug description");
});
