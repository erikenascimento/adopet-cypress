describe("Practicing with more tests", () => {
	it("Visita a página de principal do AdoPet e clica no botão: Ver pets disponíveis para adoção", () => {
		cy.visit("https://adopet-frontend-cypress.vercel.app/");
		cy.contains("a", "Ver pets disponíveis para adoção").click();
	});

	it("Visita a página de principal do AdoPet e testa os botões header", () => {
		cy.visit("https://adopet-frontend-cypress.vercel.app/");
		cy.get('a[class="header__home"]').click();
		cy.get('a[class="header__message"]').click();
	});

	it("Visite a página de /login do Adopet", () => {
		cy.visit("https://adopet-frontend-cypress.vercel.app/login");
	});

	it("Visita a página de /home do Adopet", () => {
		cy.visit("https://adopet-frontend-cypress.vercel.app/home");
	});

	it("Visita a página de /home do AdoPet e clica no botão “Falar com o responsável”.", () => {
		cy.visit("https://adopet-frontend-cypress.vercel.app/home");
		cy.contains("a", "Falar com responsável").click();
	});
});
