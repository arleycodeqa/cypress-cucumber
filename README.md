Desafio-Web Cypress-Cucumber

Pré-Requisitos

Ferramentas/Tecnologias:

Node.js = Ambiente de execução JavaScript server-side, baseado no motor V8 do Chrome.
Cucumber =  Ferramenta BDD que permite escrever testes em linguagem natural (Gherkin).
Cypress = Ferramenta de teste end-to-end para aplicações web, focada em simplicidade e eficiência.
Allure Report = Ferramenta para gerar relatórios de teste detalhados e interativos.

Arquitetura do Projeto

├── cypress
│   ├── e2e
│   │   ├── features
│   │   │       ├── login.feature
│   │   │       ├── produto.feature
│   │   ├── page_objects
│   │   │       ├── basePage.js
│   │   │       ├── productPage.js
│   │   │       ├── userPage.js
│   │   ├── step_definitions
│   │   │       ├── login.js
│   │   │       ├── product.js
│   │   ├── support
│   │   │       ├── commands.js
│   │   │       ├── e2e.js
├── .gitignore
├── cypress.config.js
├── .github-ci.yml
├── jsconfig.json
├── package.json
├── README.md

Execução do projeto

Executar comando para cypress

 npx cypress open

Executar comando para rodar no modo headless para gerar a pasta allure-results

 npx cypress run

Executar comando para gerar o grafico dos resultados

 npx allure serve