# SOS Normaliza - Backend

> Backend do sistema SOS Normaliza, desenvolvido como API Rest com NodeJS, ExpressJS e MySQL com Sequelize ORM

## Instalação 

Primeiramente, veja as permissões de utilização e submissão de alterações com os administradores do projeto.

1. Clone o repositório a partir do Github ou a partir do comando 

```shell
git clone https://github.com/eng-gabrielscardoso/sos-normaliza.git
```

2. Siga os padrões estipulados nas [REGRAS DE CODIFICAÇÃO](../RULES.md)

3. Comece a codar!

## Arquitetura

```shell
.
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── app.js
│   ├── config
│   ├── controllers
│   ├── database
│   │   ├── backup
│   │   └── connection.js
│   ├── middlewares
│   ├── migrations
│   ├── models
│   │   ├── index.js
│   ├── repositories
│   ├── routes
│   │   ├── routes.js
│   ├── seeders
│   └── services

```

* **src**: Diretório onde se encontra todo o código fonte
* *app.js*: Entrada da aplicação, onde se encontram os métodos para levantar a api
* **config**: Diretório de configuração dos módulos da API, como servidor, banco de dados, etc.
* **controllers**: Diretório de controllers da API, onde se encontram as regras de negócio. Não trabalham diretamente com o banco de dados e também não implementam rotas
* **database**: Diretório onde se encontram módulos de conexão e interação com banco de dados, bem com *schemas* ou diagramas de entidade e relacionamento (DER)
* **middlewares**: Diretório onde se encontram os middlewares da aplicação
* **migrations**: Diretório de [migrações](https://sequelize.org/master/manual/migrations.html) geradas pelo Sequelize. Utilizado somente em ambiente de desenvolvimento
* **models**: Diretório de modelos, utilizados como camada para interação e criação de tabelas e relacionamentos entre entidades no banco de dados
* *models/index.js*: Ficheiro de entrada dos models
* **repositories**: Diretório de repositórios. Na arquitetura da aplicação, repositório é a camada que interage de fato com o banco de dados e que recebe dados diretamente dos controllers. Devem conter apenas métodos para interação
* **routes**: Diretório de rotas da aplicação
* *routes/routes.js*: Ficheiro de entrada das rotas
* **seeders**: Diretório de [seeders](https://sequelize.org/master/manual/migrations.html) geradas pelo Sequelize. Utilizado somente em ambiente de desenvolvimento
* **services**: Diretório de organização de serviços, como agendamento, disparo de e-mail e qualquer outra funcionalidade que não esteja diretamente relacionada às regras de negógio (controllers)

## Desenvolvimento

1. Clone o repositório, navegue até o diretório raiz da aplicação, e no diretório *backend* rode o comando:
> Para desenvolvimento
```shell
npm run dev
```
> Para testar produção
```shell
npm run build && npm run start
```

2. Para preparar o banco de dados, utilize os comandos:
> Para migração
```shell
npm run migrate
```
> Para popular o banco
```shell
npm run seed
```
> Obs: para desfazer as ações, rode os comandos seguidos do parâmetro :undo

## Próximos passos

1. Siga as instruções das próximas seções para continuar codando
2. Não esqueça de falar com os administradores do projeto para continuar enviando suas alterações, seja para permitir pull requests ou para evitar conflitos de merge
3. Tente ao máximo seguir os padrões de codificação estipulados no projeto

[⬆ Voltar ao topo](#sos-normaliza---backend)<br>