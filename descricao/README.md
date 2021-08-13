# HACKER - DESAFIO EM GRUPO 1
## Hey Hackers!
Estamos aqui para apresentar a vocês o primeiro desafio deste programa. E nosso objetivo é que vocês pratiquem (agora em equipes) todas as competências que adquiriram ao longo deste mês.

Serão ao todo, 2 entregas, que poderão ser feitas de forma sequencial. Ao final de cada entrega, sua equipe será avaliada a partir de um checklist previamente definido (que você encontra logo a seguir).

Contexto: Continuamos no nosso contexto de sermos parte de uma equipe de desenvolvimento de websites e fomos contratados para a criação de um site de catálogo de produtos. Agora precisamos definir algumas regras de negócio para nosso Comércio Eletrônico e para isso precisamos definir algumas funcionalidades que podemos trabalhar usando Lógica de Programação e Javascript.

Neste caso, vamos tratar de uma loja (fictícia) de artigos eletrônicos e de informática, tudo bem?

E por conta disso, temos uma lista de produtos já declarada num arquivo Javascript que vocês terão acesso. Cada produto tem a seguinte estrutura:

  {

        "codProduto": 25754,

        "descricao": "ADAPTADOR BLUETOOH USB RECEPTOR DE AUDIO P2",

        "preco": 5.0,

        "qtdEstoque": 10,

        "disponivel": "sim",

        "emDestaque": "sim",

        "departamento": {

            "idDepto": 1,

            "nomeDepto": "Adaptadores"

        }

    }

 

Pois bem, com esta estrutura, agora organizando os produtos em uma grande lista, podemos (e é este o objetivo) criar várias funcionalidades para as regras de negócio do nosso ECommerce. Então vamos lá.

### Itens a serem resolvidos

1. Quantidade total de itens em estoque (somatória das quantidades de todos os produtos)

2. Quantidade total de itens em destaque (somatória das quantidades dos itens marcados como "emDestaque : sim")

3. Quantidade total de itens disponíveis (similar ao anterior)

4. Quantidade de itens disponíveis e em destaque

5. Valor total do inventário da empresa (somatória dos valores individuais multiplicado pela quantidade em estoque - considere apenas os produtos “EM ESTOQUE”)

6. Produto mais caro da loja (bem como seu departamento - considere apenas o preço dele)

7. Produto mais barato da loja (bem como seu departamento - considere apenas o preço dele)

8. Produto de estoque mais valioso (considere o preço multiplicado pela quantidade e também apenas EM ESTOQUE)

9. Produto em estoque menos valioso (considere o preço multiplicado pela quantidade e também apenas EM ESTOQUE)

10. Valor do ticket médio dos produtos da empresa (basicamente o valor total do inventário dividido pelo número de itens - considere TODOS os produtos, porém considere apenas 1 exemplar por produto)

11. Somatória de itens por departamento (você deverá retornar um objeto contendo o nome do departamento e o total de itens nele - Novamente considere os produtos “EM ESTOQUE” - e é apenas a somatória da quantidade de itens)

12. Valor total do inventário por departamento (similar ao item anterior - considere TODOS os produtos)

13. Ticket médio por departamento (similar ao item anterior, porém retornando uma lista de objetos que contenha o nome do departamento e o seu ticket médio). Este é um exercícios difícil, porém é 

14. Departamento mais valioso (qual o departamento que tem a maior somatória dos valores dos itens - Considere todos os departamentos)

15. Departamento menos valioso (similar ao anterior)

 

### ENTREGAS MÍNIMAS DO DESAFIO:

- [x] Semana 1:
1.1 Exercícios de 1 a 10

- [x] Semana 2:
2.1 Exercícios de 11 a 15

### CHECKLIST SEMANAL PARA O DESAFIO

1. Todos os códigos deverão estar em um repositório GIT de acesso público (sua equipe pode fazer cada exercício em arquivos separados ou no mesmo arquivo)

2. O arquivo contendo a lista de produtos estará disponível para todos com nome listaProdutos para que isso facilite seus testes.



### FORMATO DE AVALIAÇÃO PARA O DESAFIO

**SEMANA 01** \
**Entrega: 06/08**

Link do GITHUB de 1 membro da equipe que contenha 1 ou mais arquivos Javascript com a resolução dos exercícios (pode ser 1 único arquivo com todas as resoluções - em funções - ou vários arquivos um para cada exercício)

Arquivo README.md no repositório contendo o nome dos integrantes da equipe.

 

**SEMANA 02** \
**Entrega: 13/08**

Link do GITHUB de 1 membro da equipe que contenha as resoluções dos exercícios

Arquivo README.md no repositório contendo o nome dos integrantes da equipe



ATENÇÃO: Somente 1 pessoa por grupo entrega o desafio aqui no sistema
Entrega da semana 1 - 06/08 - 11h59 (antes do meio dia)
Entrega da semana 2 - 13/08 - 11h59 (antes do meio dia)
