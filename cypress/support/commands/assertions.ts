Cypress.Commands.add(
  "assertKeyValueType",
  (respObj: Object, keyName: string, expectedType: string) => {
    expect(respObj).to.have.property(keyName).and.to.be.a(expectedType);
  }
);
