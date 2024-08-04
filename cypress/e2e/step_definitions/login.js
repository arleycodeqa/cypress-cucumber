import {Given, When, Then, } from '@badeball/cypress-cucumber-preprocessor';
import Home from "../page_objects/userPage"
const home = new Home
  
  Given("que acesso a página de login", function () {
      home.acessarSite();
  });
  When("submeto minhas credênciais com {string} e {string}", function (User, Password) {
      home.typeUser(User, Password);
  });
  Then("devo ver o dashboard", function (checkpoint) {
      home.homeValidation(checkpoint)
  });
  Then("devo ver a notificação de erro {string}", function (checkpoint, notice) {
      home.acessNotification(checkpoint, notice)
  }) 