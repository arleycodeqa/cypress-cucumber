# language: pt
Funcionalidade: Login
    como um usuário do sistema, eu quero poder fazer Login
    Para que eu possa acessar minhas informações e também os recusos exclusivos do sistema

  Contexto:
    Dado que acesso a página de login

  Cenario: Login de usuário comum
    Quando submeto minhas credênciais com "standard_user" e "secret_sauce"
    Então devo ver o dashboard

  Cenario: Login de usuário com problema
    Quando submeto minhas credênciais com "problem_user" e "secret_sauce"
    Então devo ver o dashboard

  Cenario: Login de usuário com falha de desempenho
    Quando submeto minhas credênciais com "performance_glitch_user" e "secret_sauce"
    Então devo ver o dashboard

  Cenario: Login de usuário bloqueado
    Quando submeto minhas credênciais com "<usuario>" e "<senha>"
    Então devo ver a notificação de erro "<mensagem>"

    Exemplos:
      |usuario         |senha        |mensagem                              |
      |locked_out_user |secret_sauce |Sorry, this user has been locked out. |


  Esquema do Cenário: Tentativa de fazer login
    Quando submeto minhas credênciais com "<usuario>" e "<senha>"
    Então devo ver a notificação de erro "<mensagem>"

    Exemplos:
      |usuario       |senha        |mensagem                                                                  |
      |              |secret_sauce |Username is required                                                      |
      |standard_user |             |Password is required                                                      |
      |teste         |123546       |Epic sadface: Username and password do not match any user in this service |
