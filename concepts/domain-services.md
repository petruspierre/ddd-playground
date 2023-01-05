## Serviço de domínio

É uma operação sem estado com a função de cumprir uma tarefa específica do domínio. Ao trabalhar com agregados ou objetos de valor, é comum perceber que certas operações não parecem pertencer a eles. Essas operações são melhor colocadas em um serviço de domínio.

Isto é, um processo ou transformação significativa no domínio que não é responsabilidade natural de uma entidade ou objeto de valor, deve ser tratada como um serviço de domínio.

Exemplos de aplicação:
- Realizar uma operação em lote (vários objetos ao mesmo tempo)
- Realizar uma operação que envolve mais de um agregado/objeto de valor
