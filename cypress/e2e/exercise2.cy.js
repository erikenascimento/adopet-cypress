describe("Practicing with more tests", () => {
	beforeEach(() => {
		cy.visit("https://adopet-frontend-cypress.vercel.app/");
	});

	it("Visite a página principal do AdoPet e verifique se o title com o texto “AdoPet” está presente no html.", () => {
		cy.title().should("eq", "AdoPet");
	});

	it("Visite a página principal do AdoPet e verifique se o texto “Quem ama adota!” está presente no html.", () => {
		cy.contains("Quem ama adota!");
	});

	it("Visite a página principal do AdoPet e verifique se o texto “Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!” está presente no html.", () => {
		cy.contains(
			"Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!"
		);
	});

	it("Teste o login com um fluxo diferente: Visite a página principal do Adopet, clique no botão de ícone de mensagem no header e escreva nome e senha válidos na página de login.", () => {
		cy.get('a[class="header__message"]').click();
		cy.get('[data-test="input-loginEmail"]').type("ana@email.com");
		cy.get('[data-test="input-loginPassword"]').type("Senha123");
		cy.get('[data-test="submit-button"]').click();
	});
});
