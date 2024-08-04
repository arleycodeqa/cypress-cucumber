import {Given, When, Then, } from '@badeball/cypress-cucumber-preprocessor';
  
  Given("que faço login no sistema com usuário {string} e {string}", function (username, password) {
    cy.visit('/')
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('#login-button').click();
  });

  When("eu estiver na página de produtos", function () {
    cy.url().should('include', '/inventory.html');
  });

  When("seleciono um produto", function () {
    cy.get('#item_4_title_link').click();
  });

  When("adciono o produto no carrinho", function () {
    cy.get('#item_4_title_link').click();
    cy.get('.btn_primary.btn_inventory').click()
    cy.get('.shopping_cart_badge').should('be.visible').and('have.text', '1')
  });

  When("realizo checkout no carrinho", function () {
    cy.get('#shopping_cart_container').click()
    cy.get('.btn_action.checkout_button').click();
  })

  When("submeto minhas credênciais:", function (dataTable) {

    const user = dataTable.rowsHash()

    user.firstname
      ? cy.get('#first-name').type(user.firstname)
      : cy.log('firstname is empty')
    user.lastname
      ? cy.get('#last-name').type(user.lastname)
      : cy.log('lastname is empty')

    user.codepostal
      ? cy.get('#postal-code').type(user.postalcode)
      : cy.log('postalcode is empty')
    
    cy.get('.btn_primary.cart_button').click()

  });
  
  Then("eu devo ver a lista de produtos disponíveis", function () {
    cy.get('.inventory_list').should('be.visible');
  });

  Then("adiciono no carrinho", function () {
    cy.get('.btn_primary.btn_inventory').click()
    cy.get('.shopping_cart_badge').should('be.visible').and('have.text', '1');
  });

  Then("removo o produto do carrinho", function () {
    cy.get('.btn_secondary.btn_inventory').click()
  })

  Then("deve exibir detalhes dos produtos corretamente:", function (dataTable) {
    const produtos = dataTable.hashes();

    produtos.forEach((produto, index) => {
      cy.get('.inventory_item').eq(index).within(() => {
        cy.get('.inventory_item_name').should('have.text', produto.nome);
        cy.get('.inventory_item_price').should('have.text', produto.preco);
        cy.get('.inventory_item_desc').should('have.text', produto.descricao);
      })
    })
  });

  Then("finalizo minha compra", function () {
    cy.get('.btn_primary.cart_button').click()
  })

  Then('devo visualizar o produto adicionado no carrinho', function () {
    cy.get('#shopping_cart_container').click()
    cy.get('.inventory_item_name').should('be.visible');
  })
