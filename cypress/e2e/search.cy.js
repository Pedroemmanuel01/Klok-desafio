import pageElements from "../support/pageElements";
describe("Produtos na Amazon", () => {
  it("Verifique se ao pesquisar um produto, o sistema retorna o produto correto", () => {
    cy.buscarProduto();
  });

  it("Verifique se ao pesquisar um produto escrito de forma errada, mostra os produtos similares", () => {
    cy.produtoIncorreto();
  });

  it("Verifique se ao pesquiar um produto inexistente mostra uma mensagem de alerta.", () => {
    cy.produtoNaoEncontrado();
  });

  it("Verifique se e possivel adicionar um produto ao carinho", () => {
    cy.buscarProduto();
    cy.get(pageElements.itensCar).should("have.text", "0");
    cy.contains("button", "Adicionar ao carrinho").click();
    cy.get(pageElements.itensCar).should("have.text", "1");
    cy.get(pageElements.cartButton).click();
    cy.get(pageElements.activeCart).should("be.visible");
    cy.get(pageElements.listItem)
      .first()
      .should("contain.text", "Creatina Pura Monohidratada Dark Lab 300g");
  });
});
