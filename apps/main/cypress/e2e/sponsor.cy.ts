/// <reference types="cypress" />

describe("Sponsor", function () {
	it("should display some sponsors", function () {
		cy.visit("/sponsor")
		cy.get('[data-cy="sponsorsItems"]').children().should("not.be.empty")
	})
})
