# Sistema Xhopii

## 👥 Alunos
* **João Martins** e **Caio Aranda**

## Sobre o Projeto

O **Sistema Xhopii** é uma aplicação web de **e-commerce** desenvolvida com o objetivo de implementar funcionalidades essenciais para o gerenciamento de uma loja virtual.

O sistema permite que usuários realizem **login (com autenticação JWT)** e executem operações de **CRUD (Create, Read, Update e Delete)** para o gerenciamento de diferentes recursos da aplicação, como:

*  **Clientes**[cite: 1]
*  **Funcionários**[cite: 1]
*  **Produtos**[cite: 1]
*  **Categorias** *(4º Recurso Obrigatório)*[cite: 1]

## Objetivo

O principal objetivo do projeto é aplicar, na prática, os conceitos e boas práticas de desenvolvimento de aplicações web apresentados durante as aulas.

A implementação busca seguir os princípios de organização, arquitetura e desenvolvimento estabelecidos no conteúdo da disciplina, utilizando o padrão **MVC (Model-View-Controller)** e a estrutura de projeto apresentada na **Aula 06**[cite: 1].

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias[cite: 1]:

* **JavaScript**
* **Node.js**
* **Express.js**
* **Middlewares**
* **API RESTful**
* **MongoDB**
* **EJS**
* **Arquitetura MVC**

## Desafio Adicional Implementado
Como funcionalidade extra para o sistema, foi desenvolvido um **Dashboard de Estatísticas Dinâmico**.
Ao aceder à página inicial (Home), o sistema consulta o banco de dados MongoDB em tempo real utilizando a função `countDocuments()` do Mongoose e renderiza cards visuais informando a quantidade exata de Clientes, Funcionários, Produtos e Categorias cadastrados no e-commerce.