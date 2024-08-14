# language: pt
Funcionalidade: Produto
    como um usuário do sistema, eu quero poder visualizar produtos
    Para que eu possa acessar informações de preço e compra

  Contexto:
    Dado que faço login no sistema com usuário "standard_user" e "secret_sauce"
    
  Cenário: Visualizar lista de produtos
    Quando eu estiver na página de produtos
    Então eu devo ver a lista de produtos disponíveis

  Cenário: Verificar se todos os elementos de produto (nome, preço e descrição) são exibidos corretamente
    Quando eu estiver na página de produtos
    Então deve exibir detalhes dos produtos corretamente:
      | nome                   | preco  | descricao                                                                                                                              |
      | Sauce Labs Backpack    | $29.99 | carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection. |

  Cenário: Adicionar produto no carrinho
    Quando eu estiver na página de produtos
    E seleciono um produto
    Então adiciono no carrinho

  Cenário: Verificar se o produto adicionado aparece no resumo do carrinho
    Quando eu estiver na página de produtos
    E seleciono um produto
    E adiciono no carrinho
    Então devo visualizar o produto adicionado no carrinho

  Cenário: Remover produto do carrinho
    Quando eu estiver na página de produtos
    E seleciono um produto
    E adiciono no carrinho
    Então removo o produto do carrinho

  Cenário: Finalizar compra
    Quando adciono o produto no carrinho
    E realizo checkout no carrinho
    E submeto minhas credênciais:
        |firstname  |teste    |
        |lastname   |novo     |
        |postalcode |69000000 |
    Então finalizo minha compra

  Cenário: Tentativa de preenchimento de informações
    Quando adciono o produto no carrinho
    E realizo checkout no carrinho
    E realizo as tentativas de preenchimento de "<firstname>", "<lastname>" e "<postalcode>"
    Então devo ver uma notificação de erro "<mensagem>"
    Exemplos:

    |firstname |lastname |postalcode |mensagem                       |
    |teste     |         |69080000   |Error: Last Name is required   |
    |          |teste    |69080000   |Error: First Name is required  |
    |testeName |teste    |           |Error: Postal Code is required |


