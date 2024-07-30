describe("Página de cadastro", () => {
	beforeEach(() => {
		cy.visit("https://adopet-frontend-cypress.vercel.app/");
	});
	it("Deve preencher os campos de formulário corretamente para cadastrar um novo usuário", () => {
		cy.get('[data-test="register-button"]').click();
		cy.get('[data-test="input-name"]').type("John Doe");
		cy.get('[data-test="input-email"]').type("john@email.com");
		cy.get('[data-test="input-password"]').type("Senha123");
		cy.get('[data-test="input-confirm-password"]').type("Senha123");
		cy.get('[data-test="submit-button"]').click();
	});
});
