/// <reference types="cypress" />

import { ENavUrl } from "./typings/nav-enums";

declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      /**
       * Navigates to the provided URL
       * @example
       * cy.goTo(ENavUrls.Home)
       * @param url: ENavUrl enum value. Must be defined in support > typings > nav-enums
       */
      goTo(url: ENavUrl): Chainable<any>;
      /**
       * Asserts that a key exists with a specified value type
       * @param respObj - The object under test
       * @param keyName - The key name in the key/value pair
       * @param expectedType - The type of value expected to be returned for the key/value
       * @example cy.assertKeyValueType(interception.response.body, 'id', 'number')
       */
      assertKeyValueType(
        respObj: Object,
        keyName: string,
        expectedType: string
      ): Chainable<any>;
    }
  }
}
