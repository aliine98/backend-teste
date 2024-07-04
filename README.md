# <p align="center">API mulheres da tecnologia</p>

<p align="center">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/aliine98/backend-teste?color=magenta&style=flat">
  <a href="https://www.linkedin.com/in/aline-bevilacqua/"><img alt="Linkedin URL" src="https://img.shields.io/twitter/url?label=Conecte-se comigo&logo=linkedin&style=social&url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Faline-bevilacqua%2F"></a>
</p>

> Table of Contents
> <ol>
>   <li><a href="#-sobre-o-projeto">Sobre</a></li>
>   <li><a href="#-tecnologias">Tecnologias</a></li>
>   <li><a href="#-endpoints">Endpoints</a></li>
>   <li><a href="#-responses">Responses</a></li>
>   <li><a href="#-rodando-localmente">Rodando localmente</a></li>
>   <li><a href="#-como-contribuir-para-o-projeto">Como contribuir para o projeto</a></li>
>   <li><a href="#-licença">Licença</a>
> </ol>

## 💻 Sobre o projeto

Uma API desenvolvida no curso de backend - minha primeira API da Programaria.
- Lista mulheres no banco de dados
- Cria uma nova mulher no banco de dados
- Atualiza informações de cada mulher
- Deleta mulher

## 🛠 Tecnologias

- [![Express](https://img.shields.io/static/v1?style=for-the-badge&message=Express&color=000000&logo=Express&logoColor=FFFFFF&label=)](https://expressjs.com/)
- [![MongoDB](https://img.shields.io/static/v1?style=for-the-badge&message=MongoDB&color=47A248&logo=MongoDB&logoColor=FFFFFF&label=)](https://www.mongodb.com/)
- [![Mongoose](https://img.shields.io/static/v1?style=for-the-badge&message=Mongoose&color=880000&logo=Mongoose&logoColor=FFFFFF&label=)](https://tailwindcss.com/)

## 📍 Endpoints

URL base: `https://backend-teste-vn7a.onrender.com`

| Método | Endpoint | Descrição |
|---|---|---|
| `GET` | `/mulheres`| Retorna um array de objetos com as informações das mulheres. |
| `POST` |`/nova-mulher`| Adiciona uma nova mulher passando o objeto no body da requisição |
| `PATCH` |`/mulheres/$id`| Atualiza dados de uma mulher pelo seu id. |
| `DELETE` |`/mulheres/$id`| Remove uma mulher do banco de dados pelo id. |

## ✅ Responses

`GET /mulheres`
```js
[
  {
    "_id": "6674a0657574e7a7a5cacd02",
    "name": "Ada Lovelace",
    "image": "https://s2-techtudo.glbimg.com/7YOBBhghbMF9wsUuBP7UcUh2yXI=/0x342:2439x2307/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/n/3/FbrmyhQneVYWGUPIe8vA/adalovelace.jpg",
    "desc": "Augusta Ada Byron King, Condessa de Lovelace, atualmente conhecida como Ada Lovelace, foi uma matemática e escritora inglesa. Hoje é reconhecida principalmente por ter escrito o primeiro algoritmo para ser processado por uma máquina, a máquina analítica de Charles Babbage.",
    "__v": 0
  },
]
```

`POST /nova-mulher`

Retorna o objeto da nova mulher adicionada
```js
  {
    "_id": "6674a06f7574e7a7a5cacd06",
    "name": "Grace Hopper",
    "image": "https://www.alura.com.br/artigos/assets/mulheres-historia-tecnologia-programacao/grace-hopper.jpg",
    "desc": "Grace Hopper foi uma das primeiras a se tornar PhD em Matemática, ela trabalhou na Marinha dos Estados Unidos durante a Segunda Guerra Mundial, sendo uma das responsáveis por programar o Mark I, o primeiro computador eletromecânico do mundo. Criadora da linguagem de programação de alto nível Flow-Matic (em desuso), base para a criação do COBOL. Uma curiosidade sobre Grace Hopper é que foi por causa dela que começamos a chamar as falhas de “bug”. Isso porque Grace, ao tentar encontrar a origem de um problema em seu computador, descobriu um inseto morto dentro da máquina.",
    "__v": 0
  }
```

`PATCH /mulheres/$id`

Retorna o objeto da mulher com as informações corrigidas
```js
  {
    "_id": "6674a0657574e7a7a5cacd02",
    "name": "Ada Lovelace",
    "image": "https://s2-techtudo.glbimg.com/7YOBBhghbMF9wsUuBP7UcUh2yXI=/0x342:2439x2307/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/n/3/FbrmyhQneVYWGUPIe8vA/adalovelace.jpg",
    "desc": "Ada Lovelace foi uma matemática e escritora inglesa. Hoje é reconhecida principalmente por ter escrito o primeiro algoritmo para ser processado por uma máquina, a máquina analítica de Charles Babbage.",
    "__v": 0
  }
```

`DELETE /mulheres/$id`
```js
  {
    "message": "Mulher deletada com sucesso"
  }
```

## 🚀 Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/aliine98/backend-teste
```

Entre no diretório do projeto

```bash
  cd backend-teste
```

Instale as depêndencias

```bash
  npm install
```

Rode o servidor

```bash
  node index.js
```

## 😯 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m ":sparkles: feat: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
5. No seu repositório clique num botão chamado _**Compare & Pull Request**_ e crie o seu PR.

> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions)

## 📝 Licença

![License](https://img.shields.io/github/license/aliine98/backend-teste?&logo=m&style=for-the-badge)

Feito com ❤️ por <a href="https://github.com/aliine98">Aline Bevilacqua</a>!

<a href="#API-mulheres-da-tecnologia">⬆ Voltar ao topo</a>
