describe("More exercises testing some API responses", () => {
	const authorization = `Bearer `;

	it("Checks if the profile name on the API corresponds to: Ana de Jesus", () => {
		cy.request({
			method: "GET",
			url: "https://adopet-api-i8qu.onrender.com/adotante/perfil/11643cd6-7112-415b-95d2-07904b0d1a1c",
			headers: { authorization },
		}).then(res => {
			expect(res.body.perfil.nome).to.be.equal("Ana de Jesus");
		});
	});
});
