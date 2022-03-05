# SOS Normaliza - Frontend

> Frontend do sistema SOS Normaliza, desenvolvido com NodeJS, NuxtJS, Bootstrap e outras dependências encontradas no package.json

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
├── commitlint.config.js
├── components
├── jest.config.js
├── jsconfig.json
├── nuxt.config.js
├── package.json
├── package-lock.json
├── pages
├── README.md
├── static
│   ├── css
│   ├── fonts
│   ├── images
│   ├── js
│   └── video
├── stylelint.config.js

```

* *commitlint.config.js*: Configuração de commit
* **components**: Diretório de componentes da aplicação, onde devem conter todas as unidades de que constituem uma página
* *jest.config.js*: Configuração do Jest, utilizado somente para testes unitários
* *jsconfig.json*: Configuração do Javascript
* *nuxt.config.js*: Ficheiro de configuração do NuxtJS, não deve ser alterado com frequência ou sem o conhecimento necessário
* **pages**: Diretório de páginas da aplicação, ou views
* **static**: Diretório de ficheiros estáticos utilizados globalmente pela aplicação
* **static/css**: Estilos globais
* **static/fonts**: Fontes globais
* **static/images**: Imagens globais
* **static/js**: Scripts globais
* **static/video**: Vídeos globais
* *stylelint.config.js*: Configuração de estilo de codificação

## Desenvolvimento

1. Clone o repositório, navegue até o diretório raiz da aplicação, e no diretório *frontend* rode o comando:
> Para desenvolvimento
```shell
npm run dev
```
> Para testar produção
```shell
npm run build && npm run start
```

## Próximos passos

1. Siga as instruções das próximas seções para continuar codando
2. Não esqueça de falar com os administradores do projeto para continuar enviando suas alterações, seja para permitir pull requests ou para evitar conflitos de merge
3. Tente ao máximo seguir os padrões de codificação estipulados no projeto

[⬆ Voltar ao topo](#sos-normaliza---frontend)<br>