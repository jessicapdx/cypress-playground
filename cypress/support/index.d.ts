/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Navigates to the provided URL
     * @example
     * cy.goTo(ENavUrls.Home)
     * @param url: ENavUrl enum value. Must be defined in support > typings > nav-enums
     */
    goTo(): Chainable<any>;
  }
}
