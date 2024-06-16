/// <reference types="cypress" />

import { ENavUrl } from "support/typings/nav-enums";

describe("GET comments", () => {
  beforeEach(() => {
    cy.intercept("GET", "/comments").as("getComments");
    cy.goTo(ENavUrl.Interceptions);
  });

  it("should GET /comments when viewing the fetch-api page", () => {
    cy.wait("@getComments").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
      const comments = interception.response.body.flat();
      comments.forEach((comment: Object) => {
        const expectedKeysAndTypes = [
          { key: "postId", valueType: "number" },
          { key: "id", valueType: "number" },
          { key: "name", valueType: "string" },
          { key: "email", valueType: "string" },
        ];
        expectedKeysAndTypes.forEach((obj) => {
          cy.assertKeyValueType(comment, obj.key, obj.valueType);
        });
      });
    });
  });

  it("should render mock GET /comments data", () => {
    cy.intercept("GET", "/comments", { fixture: "get-comments-mock.json" }).as(
      "mockComments"
    );
    cy.reload();
    cy.wait("@mockComments").then((mock) => {
      expect(mock.response.body).to.have.lengthOf(13);
    });
  });
});
