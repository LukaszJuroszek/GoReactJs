import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

// describe('Log In', () => {
//     it('succesfully performs login action', () => {
//         cy.visit('/');
//         cy.contains('Pleas login first');
//         cy.get('input[data-testid="userNameInput"]').type('test');
//         cy.get('input[data-testid="passwordInput"]').type('test');
//         cy.get('button[data-testid="loginButton"]').click();
//         cy.get('button[data-testid="logoutButton"]').should('be.visible');
//     });
//     it('succesfully performs login and logout action', () => {
//         cy.visit('/');
//         cy.contains('Pleas login first');
//         cy.get('input[data-testid="userNameInput"]').type('test');
//         cy.get('input[data-testid="passwordInput"]').type('test');
//         cy.get('button[data-testid="loginButton"]').click();
//         cy.get('button[data-testid="logoutButton"]').click();
//         cy.contains('Pleas login first');
//     });
// });