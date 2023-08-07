# AlugaCar - Gerenciamento de Aluguel de Carros

<div align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/joaomacedx/alugaCar?style=flat" >
  <img alt="Made by João Macêdo" src="https://img.shields.io/badge/made%20by-João%20Macêdo-blue">
 </div>
 
O **AlugaCar** é uma aplicação sofisticada projetada para simplificar o processo de gerenciamento de aluguel de carros. Este projeto foi desenvolvido com um foco claro na adoção de princípios sólidos de engenharia de software e em uma arquitetura bem definida, inspirada nas diretrizes da **Clean Architecture**. Essas escolhas estratégicas garantem a modularidade, flexibilidade e facilidade de manutenção do código, promovendo uma separação eficaz entre a lógica de negócios, a camada de interface e a infraestrutura.

## Princípios de Design e Arquitetura:

Durante o desenvolvimento do AlugaCar, aplicamos os princípios **SOLID**, que são fundamentais para a criação de software robusto e escalável. Utilizamos referências da Clean Architecture para estruturar o projeto de maneira coerente. Isso resultou em uma arquitetura onde cada componente possui responsabilidades claramente definidas, promovendo a coesão e a legibilidade do código. Alguns **Design Patterns** foram adotados, como **Factory**, **Repository**, **Singleton** e **Data Transfer Object**, aprimorando a reutilização de unidades e organização do código.
## Estrutura do Projeto:
```
alugaCar/
|-- src/
|   | — database/migrations
|   |-- modules/
|   |   |-- accounts/
|   |   |   |-- entities/
|   |   |   | -- factories/
|   |   |   | -- repositories/
|   |   |   |-- usecases/
|   |   |-- cars/
|   |   |   |-- entities/
|   |   |   | -- factories/
|   |   |   | -- repositories/
|   |   |   |-- usecases/
|   |-- routes/
|   |-- shared/
|   |   |-- container/
|   |-- server.ts/
|-- .dockerignore
|-- .eslintrc.json
|-- .gitignore
|-- docker-compose.yml
|-- package-lock.json
|-- package.json
|-- prettier.config.js
|-- Dockerfile
|-- tsconfig.json 
```

## 🛠 Tecnologias Utilizadas
- TypeScript
- NodeJS
- Express
- TypeORM
- tsyringe
- Docker
- Docker-Compose

       - Optei por tecnologias poderosas para implementar o projeto AlugaCar, visando eficiência e escalabilidade. O projeto está sendo desenvolvido principalmente em TypeScript, uma linguagem que combina tipagem estática e funcionalidades modernas. O framework Node.js em conjunto com Express oferece uma base sólida para o desenvolvimento de APIs robustas e de alto desempenho. O banco de dados PostgreSQL foi escolhido devido à sua confiabilidade e capacidade de lidar com grandes volumes de dados de forma eficaz. O TypeORM permite código independente do banco de dados, com suporte direto a TypeScript e flexibilidade para trocar bancos facilmente, além de Migrations Automáticas o que  facilita a atualização e versionamento do banco de dados baseado em mudanças no código, e é compatível com diversos bancos de dados SQL e NoSQL. O tsyringe promove código desacoplado, facilitando testes e manutenção, Decorators Intuitivos que tornam o registro e a resolução de dependências mais limpos e claros, além de adicionar mínima sobrecarga ao projeto, mantendo a performance.

## Contribua!

Convido você a explorar a estrutura detalhada do projeto AlugaCar visitando o [repositório oficial no GitHub](https://github.com/joaomacedx/alugacar). Lá, você encontrará informações abrangentes sobre a implementação, a arquitetura e os padrões de design utilizados. A [Wiki oficial no GitHub](https://github.com/joaomacedx/alugaCar/wiki) do projeto oferece uma visão mais profunda e pode ser um ótimo ponto de partida para entender as regras para contribuição. Além disso, incentivamos e damos as boas-vindas a contribuições que possam enriquecer e expandir as funcionalidades do AlugaCar.

**Equipe AlugaCar**
- - 📫 You can reach me at <a href="mailto:joaomacedx@gmail.com">joaomacedx@gmail.com</a><br>
