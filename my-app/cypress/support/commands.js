Cypress.Commands.add('login', (userName, password) => {
    // Make a POST request to our backend
    cy.request({
        url: 'https://localhost:5001/api/User',
        method: 'POST',
        body: {
            userName: userName,
            password: password,
        },
    }).then((resp) => {
        // assert response from server
        expect(resp.status).to.eq(200);
        expect(resp.body).to.have.property('token');
        console.log(resp.body);
        window.localStorage.setItem('jwt', resp.body.token);
        // go to Dashboard
        cy.visit('/');
    });
});
