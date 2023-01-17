## Fábricas

Uma fábrica é um objeto que cria outros objetos. Ela é responsável por criar objetos de uma determinada classe, e pode ser usada para encapsular a lógica de criação de objetos complexos.

Pode não ter responsabilidade no modelo de domínio, mas ainda faz parte do design do domínio.

Deve ser utilizada uma interface que encapsula a criaçao de objetos complexos e agregados, e não deve exigir do cliente o uso de classes concretas dos objetos que estão sendo instanciados.