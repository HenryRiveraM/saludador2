/*

Como visitante de la pagina de la UCB
Quiero poder recibir saludo por nombre
Para sentir una recepcion amigable a la pagina 

Criterios de confirmacion
    - Si escribo mi nombre en la pagina inicia y activo el saludo 
      deberia recibir un saludo con mi nombre de la forma: "Hola <nombre>"
    - Si activo el saludo sin haber ingredado un nombre 
      deberia recibir un mesaje: "Por favor ingrese su nombre"
    - Si el nombre que se escribe supera los 150 caracteres 
      deberia mostrarse un mensaje: "Solo necesitas escribir tu nombre, 
      el nombre no deberia tener mas de 150 letras"
*/

//ATDD - Acceptace Test Driven Development
//TDD - Test Driven Development

describe("Saludador", () => {
  //Si escribo mi nombre en la pagina inicia y activo el saludo
  //    deberia recibir un saludo con mi nombre de la forma: "Hola <nombre>"
  it("Deberia saludar por nombre", () => {
    cy.visit("/");
    cy.get("#nombre").type("Henry");
    cy.get("#saludar-button").click();
    cy.get("#resultado-div").should("contain", "Hola Henry");
  });
});