import pageElements from "../pageElements";

Cypress.Commands.add("buscarProduto", () => {
  cy.visit("/");
  cy.get(pageElements.searchInput).type("creatina dark lab 300g");
  cy.get(pageElements.productSuggestion)
    .first()
    .should("contain.text", "creatina dark lab 300g");
  cy.get(pageElements.searchInput).type("{enter}");
  cy.get(pageElements.productTitle)
    .first()
    .should("contain.text", "Creatina Pura Monohidratada Dark Lab 300g");
});
Cypress.Commands.add("produtoIncorreto", () => {
  cy.visit("/");
  cy.get(pageElements.searchInput).type("cratina darklab 300");
  cy.get(pageElements.productSuggestion)
    .first()
    .should("contain.text", "creatina dark lab 300g");
  cy.get(pageElements.searchInput).type("{enter}");
  cy.get(pageElements.productTitle)
    .first()
    .should("contain.text", "Creatina Pura Monohidratada Dark Lab 300g");
});
Cypress.Commands.add("produtoNaoEncontrado", () => {
  cy.visit("/");
  cy.get(pageElements.searchInput).type("creftduhgdayug");
  cy.get(pageElements.searchInput).type("{enter}");
  cy.get(pageElements.noResultsMessage)
    .should("contain.text", "Nenhum resultado para")
    .and("contain.text", "creftduhgdayug");
});
