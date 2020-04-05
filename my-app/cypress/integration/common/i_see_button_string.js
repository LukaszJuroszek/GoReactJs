import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(`I see button {string}`, (buttonTestId) => {
    cy.get(`button[data-testid="` + buttonTestId + `"]`).should('be.visible');
});
