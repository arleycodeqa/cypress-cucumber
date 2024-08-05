import {Given, When, Then, } from '@badeball/cypress-cucumber-preprocessor';
import Home from '../page_objects/userPage';
import Main from '../page_objects/productPage';
const main = new Main
const home = new Home

  Given("que faço login no sistema com usuário {string} e {string}", function (User, Password) {
    home.acessarSite()
    home.typeUser(User, Password)
  });

  When("eu estiver na página de produtos", function () {
      main.screenPageMain()
  });

  When("seleciono um produto", function () {
      main.selectProduct()
  });
  
  When("adciono o produto no carrinho", function () {
      main.addProductCar()
      main.viewIfContainsOne()
  });

  When("realizo checkout no carrinho", function () {
      main.checkoutCart()
  })

  When("submeto minhas credênciais:", function (dataTable) {
    const user = dataTable.rowsHash()
       main.submitFirstName(user.firstname)
       main.submitLastName(user.lastname)
       main.submitCodePostal(user.postalcode)
  });
  
  Then("eu devo ver a lista de produtos disponíveis", function () {
       main.visiblelistProduct()
  });

  Then("adiciono no carrinho", function () {
       main.addShoppingCart()
  });

  Then("removo o produto do carrinho", function () {
       main.removeProductCar()
  })

  Then("deve exibir detalhes dos produtos corretamente:", function (dataTable) {
    const produtos = dataTable.hashes();
        produtos.forEach((produto) => {
        main.mustDisplayProduct(produto.nome)
        main.mustDisplayPreco(produto.preco)
        main.mustDisplayDescription(produto.descricao)
    })
  });

  Then("finalizo minha compra", function () {
      main.clickFinishProduct()
  })

  Then('devo visualizar o produto adicionado no carrinho', function () {
       main.visibleProductCar()
  })
