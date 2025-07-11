// tests/BugList.test.jsx
test("displays bugs from API", async () => {
  axios.get = jest.fn().mockResolvedValue({
    data: [{ _id: 1, title: "Crash", status: "open" }],
  });

  render(<BugList />);
  expect(await screen.findByText("Crash")).toBeInTheDocument();
});
