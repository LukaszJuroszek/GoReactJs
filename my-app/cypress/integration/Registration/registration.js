import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('I open registration page', () => {
    cy.visit('/#/UserRegister');
});
