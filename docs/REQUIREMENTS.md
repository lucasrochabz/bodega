## Requisitos do Projeto

### Requisitos Funcionais (RF)

- RF01 - O sistema deve permitir o cadastro de usuários.
- RF02 - O sistema deve permitir login com e-mail e senha.

### Requisitos Não Funcionais (RNF)

- RNF01 - A API deve responder em menos de 500ms.
- RNF02 - O sistema deve armazenar os dados em um banco MySQL.
- RNF03 - O backend deve seguir o padrão RESTful.

### Regras de Negócio (RN)

- RN01 - O e-mail do usuário deve ser único no sistema.

### Camadas

“Custom Hook per Resource” / Hook de domínio
api/ -> endpoints
http/ -> request()
services/ -> integração
hooks/ -> hooks de domínio (useProduct, useProducts)
pages/ -> telas

api/ -> builders de endpoint (GET_ME, POST_LOGIN)
http/ -> cliente HTTP (request, interceptors, token, retry...)
services/ -> regras de integração (authService, productService)
hooks/ -> consumo no React (useAuth, useProducts)

Page
↓
useProduct(productId)
↓
productsService.getProduct()
↓
request()
↓
GET_PRODUCT()

UI Layer (components/pages)
Hooks Layer (state + orchestration)
Service Layer (business calls)
API Layer (endpoints)
HTTP Layer (axios/fetch)

Page = UI
Hook = orquestra dados
Service = endpoint
API = rota
HTTP = fetch

### Tecnologias

npm install --save react-router-dom
npm install --save-dev i18next
npm install --save-dev react-i18next

npm install --save-dev cypress
npm install --save-dev ntl (pendente)
