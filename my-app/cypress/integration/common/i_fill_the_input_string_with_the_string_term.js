import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(`I fill the input {string} with the {string} term`, (inputTestId, value) => {
    cy.get(`input[data-testid="` + inputTestId + `"]`).type(value);
});
