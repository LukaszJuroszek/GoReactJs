import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(`I press link {string}`, (linkTestId) => {
    cy.get(`a[data-testid="` + linkTestId + `"]`).click();
});
