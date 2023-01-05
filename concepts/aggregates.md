## Agregados

É um conjunto de objetos associados que tratamos como uam unidade, com o propósito de mudança de dados.

### Exemplo

Imaginando um cenário de um sistema que possui Clientes e Pedidos.

- Clientes são entidades
- Clientes possuem um Endereço
- Endereço é um objeto de valor
- Pedidos são entidades
- Pedidos possuem um ou mais Item
- Item são entidades

Clientes e Endereço são fortemente relacionados pois um endereço existe apenas se o Cliente existir, e o Cliente pode apenas existir com um Endereço. Fazem parte, portanto, do agregado Cliente (root).
A entidade de cliente possui em seus atributos, o objeto de valor Endereço integrado a esta, por fazerem parte do mesmo agregado.

Pedido e Item são fortemente relacionados, pois a existência de um implica na existência do outro. Fazem parte, portanto, do agregado Pedido (root).
A entidade de pedido possui em seus atributos uma ou mais entidades Item, por fazerem parte do mesmo atributo.

Por outro lado, Clientes e Pedidos se relacionam, e por mais que a sua relação seja forte, no contexto do sistema, é possível que um usuário não possua pedidos e também os contextos destes estão delimitados.
Pedido, portanto, haveria um atributo para armazenar o ID do Cliente, mas não possui toda a informação da entidade Cliente. Estes não formam um agregado.