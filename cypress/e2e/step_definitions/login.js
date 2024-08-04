import {Given, When, Then, } from '@badeball/cypress-cucumber-preprocessor';
  
  Given("que acesso a página de login", function () {
    cy.visit('https://www.saucedemo.com/v1/')
  });
  
  When("submeto minhas credênciais com {string} e {string}", function (username, password) {
    
    username
      ? cy.get('[data-test="username"]').type(username)
      : cy.log('username is empty')
  
    password
      ? cy.get('[data-test="password"]').type(password)
      : cy.log('password is empty')
    
    cy.get('#login-button').click();
  
  });
  
  Then("devo ver o dashboard", function () {
    cy.get('.app_logo')
      .should('be.visible')
  });
  
  Then("devo ver a notificação de erro {string}", function (notice) {
    cy.get('.error-button')
      .should('be.visible')
      cy.contains(notice)
  })