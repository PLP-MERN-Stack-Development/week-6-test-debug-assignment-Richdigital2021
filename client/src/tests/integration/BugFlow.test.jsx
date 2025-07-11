import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../App";
import axios from "axios";

jest.mock("axios");

test("creates and lists a bug end-to-end", async () => {
  axios.post.mockResolvedValue({
    data: { title: "Test", description: "Desc" },
  });
  axios.get.mockResolvedValue({
    data: [{ _id: "1", title: "Test", description: "Desc", status: "open" }],
  });

  render(<App />);
  screen.getByPlaceholderText(/title/i).value = "Test";
  screen.getByPlaceholderText(/description/i).value = "Desc";
  screen.getByText(/submit bug/i).click();

  expect(await screen.findByText("Test")).toBeInTheDocument();
});
