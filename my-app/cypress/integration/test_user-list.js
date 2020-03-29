describe('User List', () => {
    beforeEach(() => {
        cy.login('test', 'test');
    });

    it('succesfully show user list', () => {
        cy.get('button[data-testid="refreshButton"]').click();
        cy.get('div[data-testid="userList"]').should('be.visible');
    });

    it('succesfully show user test', () => {
        cy.get('button[data-testid="refreshButton"]').click();
        cy.get('div[data-testid="userList"]').should('be.visible');
        cy.get('span[data-testid="userName"]').should('be.visible');
        cy.get('span[data-testid="userId"]').should('be.visible');
        cy.get('span[data-testid="userName"]').contains('test');
        cy.get('span[data-testid="userId"]').contains('1');
    });
});
