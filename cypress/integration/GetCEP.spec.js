context("Get CEP information", () => {
  it("Get information by CEP", () => {
    cy.visit("http://localhost:3000");
    cy.intercept("GET", "88343462", {
      logradouro: "Rua Rio das Flores",
      bairro: "Rio Pequeno",
      cidade: "Camboriú",
      estado: "SC",
      cep: "88343462",
    });

    cy.viewport(1440, 900)
    cy.get("input").type("88343462")
    cy.contains("Buscar pelo CEP").click()
    cy.get('input[value="Rio Pequeno"]')
  });
});
