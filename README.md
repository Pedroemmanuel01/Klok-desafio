# Klok-desafio
# Testes Automatizados para Busca de Produtos na Amazon com Cypress

Este projeto automatiza testes para verificar a funcionalidade de busca de produtos no site da Amazon. Ele inclui casos para validar produtos corretos, sugestões para produtos digitados incorretamente, mensagens de erro para produtos inexistentes e a adição de itens ao carrinho.

## **Índice**

1. [Casos de Teste Implementados](#casos-de-teste-implementados)
2. [Pré-requisitos](#pré-requisitos)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Explicação do Código](#explicação-do-código)
5. [Código SQL](#código-sql)  
6. [Explicação do Código](#explicação-do-código)  

## **Casos de Teste Implementados**

1. **Busca por Produto Correto**
   - **Descrição:** Verifica se, ao pesquisar um produto existente, o sistema retorna o produto correto.
   - **Objetivo:** Garantir que a funcionalidade de busca esteja funcionando para produtos válidos.

2. **Sugestões para Produto Incorreto**
   - **Descrição:** Testa se o sistema sugere produtos semelhantes ao pesquisar por um termo digitado incorretamente.
   - **Objetivo:** Avaliar a capacidade do sistema de corrigir ou sugerir alternativas para erros de digitação.

3. **Mensagem para Produto Inexistente**
   - **Descrição:** Valida se, ao pesquisar por um produto inexistente, o sistema exibe uma mensagem indicando "Nenhum resultado para", "nome do produto".
   - **Objetivo:** Informar o usuário de forma clara quando nenhum produto é encontrado.

4. **Adição de Produto ao Carrinho**
   - **Descrição:** Testa se é possível adicionar um produto ao carrinho, verificar a quantidade de itens e a listagem correta no carrinho.
   - **Objetivo:** Garantir que a funcionalidade de carrinho esteja operando adequadamente.

## **Pré-requisitos**

- **Node.js** (v18 ou superior)
- **Cypress** (v13.16.0 utilizado neste projeto)
- Navegador compatível com o Cypress instalado (Chromium, Edge, etc.)

---

## **Estrutura do Projeto**

klok-desafio/ 
│ 
├── cypress/ 
│ ├── e2e/ 
│ │ ├── search.cy.js # Casos de teste 
│ ├── support/ 
│ │ ├── commands.js # Métodos de suporte (funções reutilizáveis) 
│ │ │ ├── front.js # Funções de suporte adicionais 
│ │ ├── pageElements.js # Seletores de elementos do DOM 
│ ├── fixtures/ # Dados de teste (não usado neste projeto) 
├── cypress.config.js # Configuração do Cypress 
├── package.json # Dependências do projeto 
├── README.md # Documentação do projeto

## **Explicação do Código**

### **Casos de Teste**
Os casos de teste estão implementados no arquivo `search.cy.js`, localizado na pasta `cypress/e2e/`.  
Eles cobrem os seguintes cenários:

- **Busca por Produto Correto:** Confirma que o sistema retorna os dados do produto quando ele existe.  
- **Sugestões para Produto Incorreto:** Garante que, ao pesquisar por um termo incorreto, sugestões relevantes sejam exibidas.  
- **Mensagem para Produto Inexistente:** Valida se uma mensagem "Nenhum resultado para" é exibida ao buscar por um produto que não existe.  
- **Adição de Produto ao Carrinho:** Testa a capacidade do sistema de adicionar produtos ao carrinho e listar corretamente os itens.

### **Comandos Personalizados**
Os comandos personalizados foram criados para evitar duplicação de código.  
Eles estão nos arquivos `commands.js` e `front.js`, localizados em `cypress/support/`.

- **Comandos em `commands.js`:**
  - `buscarProduto(produto)`: Automação para acessar a barra de busca, digitar o nome do produto e executar a pesquisa.
  - `validarSugestoes()`: Verifica se as sugestões aparecem corretamente.

- **Comandos em `front.js`:**
  - `adicionarAoCarrinho()`: Simula a ação de adicionar um produto ao carrinho.
  - `validarCarrinho()`: Confirma se os itens adicionados aparecem listados no carrinho.

### **Seletores Centralizados**
Os seletores de elementos do DOM estão no arquivo `pageElements.js`, localizado na pasta `cypress/support/`.  
Isso permite centralizar a manutenção dos elementos utilizados nos testes.

## **Código SQL**

O seguinte código SQL foi utilizado para listar informações de clientes que possuem apólices ativas, incluindo o número da apólice, tipo de seguro e valor do prêmio.

SELECT 
    clientes.nome AS nome_cliente,
    apólices.numero AS numero_apolice,
    apólices.tipo AS tipo_seguro,
    apólices.valor AS valor_premio
FROM 
    clientes
JOIN 
    apólices 
ON 
    clientes.id = apólices.cliente_id
WHERE 
    apólices.status = 'ativa';

## **Explicação do Código**

### ** Objetivo**
Este código tem como objetivo listar os clientes e suas apólices ativas, com informações detalhadas sobre o tipo de seguro e o valor do prêmio.

### ** Colunas Selecionadas**
- **clientes.nome**: Nome do cliente.
- **apólices.numero**: Número da apólice associada ao cliente.
- **apólices.tipo**: Tipo de seguro vinculado à apólice.
- **apólices.valor**: Valor do prêmio da apólice.

### **Relacionamento entre Tabelas**
As tabelas **clientes** e **apólices** estão relacionadas pelo campo **cliente_id** na tabela **apólices**, que referencia o campo **id** da tabela **clientes**.

### ** Condição Aplicada**
O código filtra apenas as apólices com status **ativa** (`apólices.status = 'ativa'`).

### ** Localização do Código**
O script SQL está salvo no arquivo `SeguraTudo.txt`, disponível no diretório do projeto.

