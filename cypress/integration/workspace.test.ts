context("Test the overall app", () => {
  beforeEach(() => {
    cy.visit("");
  });

  describe("Desktop functionalities", () => {
    it("renders with text", () => {
      cy.get(".app-container").should("exist");
      cy.get(".top-bar").should("exist");
      cy.get(".bottom-bar").should("exist");
    });
  });
});
