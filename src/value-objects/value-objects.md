## Value objects

Um value object é um objeto imutável em que devemos nos importar apenas com seus atributos.

### Exemplo

```
Endereco:
- Rua
- Cidade
- Estado
- CEP

Na maioria dos contextos em que um endereço é utilizado em uma aplicação, este não deve ser alterado, mas sim trocado. Exemplo: ao se mudar de casa, o sujeito não está alterando a sua rua, cidade, estado ou CEP, mas sim trocando o seu endereço por outro, mesmo que isso inclua apenas se mudar para o outro lado da rua.
``` 

Value objects também seguem o princípio da autovalidação.