describe("Bug Tracker E2E", () => {
  it("submits a new bug and sees it in the list", () => {
    cy.visit("/");
    cy.get('input[placeholder="Title"]').type("Cypress Bug");
    cy.get('textarea[placeholder="Description"]').type("E2E Description");
    cy.contains("Submit Bug").click();
    cy.contains("Cypress Bug");
  });
});
