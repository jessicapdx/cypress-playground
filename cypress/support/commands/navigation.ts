import { ENavUrl } from "@typings/nav-enums";

Cypress.Commands.add("goTo", (url: ENavUrl) => {
  cy.intercept("GET", url).as(`get${url}`);
  cy.visit(`${url}`);
  cy.wait(`@get${url}`).then((interception) => {
    expect(interception.response.statusCode).to.eq(200);
  });
});
