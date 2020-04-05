import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(`I press button {string}`, (buttonTestId) => {
    cy.get(`button[data-testid="` + buttonTestId + `"]`).click();
});
