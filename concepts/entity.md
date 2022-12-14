## Entidades

Entidades devem ser únicas, isto é, possuem um atributo indentificador.
Entidades carregam valores que são alterados com o tempo.
Entidades possuem comportamento.

### Entidade anêmica

Não representam as regras de negócios com a devida semântica. [Exemplo](/concepts/examples/customer-anemic.ts)

### Regras de negócios

Quando se pensa sobre motivos para mudança, geralmente estamos pensando em regras de negócio.

```ts
// Método de uma entidade anêmica, não representa a regra de negócio.
set name(name: string) {
  this._name = name;
}

// Método com a semântica necessária para entender que em algum momento, é esperado que o usuário pode mudar o nome cadastrado na aplicação.
changeName(name: string) {
  this._name = name;
}
```

A modelagem de um domínio rico expressa o negócio, não se baseia apenas em getters e setters.

A entidade deve ser sempre constante, os dados necessários devem existir, caso contrário, não faz sentido, a entidade não é capaz de expressar a regra de negócio.

A entidade deve se autovalidar, e não depender de um elemento externo a esta.