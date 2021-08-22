describe("Main Page", function () {
  it("main page displayed successfully", function () {
    cy.visit("http://localhost:3000/");
    cy.get("[data-cy=search-input]").click().type("Land");
    cy.get("[data-cy=search-btn]").click();
    cy.get("[data-cy=movie-list]").should("be.visible").scrollTo("bottom");
    cy.get("[data-cy=card-container]").should("be.visible");
  });

  it("popup poster displayed", function () {
    cy.get("[data-cy=card-container]").should("be.visible");
    cy.get("[data-cy=movie-list]").should("be.visible").scrollTo("top");
    cy.get("[data-cy=popup-open]").should("be.visible").first().click();
    cy.get("[data-cy=popup-poster]").should("be.visible");
    cy.get("[data-cy=popup-close]").should("be.visible").click();
  });

  it("movie detail displayed", function () {
    cy.get("[data-cy=card-container]").should("be.visible");
    cy.get("[data-cy=detail-btn]").should("be.visible").first().click();
  });
});
