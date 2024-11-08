/// <reference types="cypress" />

describe("Post", function () {
	it("should display post content", function () {
		cy.visit("/post/126")
		cy.get('[data-cy="postContent"]').should(($e) => {
			expect($e.first()).to.contain("Tony He")
		})
	})
})
