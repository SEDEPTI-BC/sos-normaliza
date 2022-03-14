# SOS Normaliza API

Documentação sobre a forma de utilização da API do SOS Normaliza.

## Login

Método para fazer o login no sistema.

**URL**: `/users/login`

**MÉTODO**: `POST`

**Autenticação necessária**: NÃO

**Permissão necessária** : Nenhuma

Envie o email e a senha (password) da conta que você gostaria de fazer o login.


**Exemplo de requisição** Todos os campos são obrigatórios

```json
{
    "email": "joao@email.com",
	"password": "joao1234"
}
```

### Resposta de sucesso
**Condição**: Se a requição estiver OK e a conta a ser logada existir.

**Code**: `200 OK`

**Exemplo de resposta**
```json
{
    "refreshToken": "[refresh_token_valido]"
}
```