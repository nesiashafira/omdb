describe("Movie Page", function () {
  it("movie page displayed successfully", function () {
    cy.visit("http://localhost:3000/tt3783958");
    cy.get("[data-cy=detail-container]").should("be.visible");
    cy.get("[data-cy=detail-title]").should("be.visible");
    cy.get("[data-cy=detail-poster]").should("be.visible");
    cy.get("[data-cy=back-btn]").should("be.visible").click();
  });
});
