# AlugaCar - Car Rental Management

<div align="center">
  <img alt="AlugaCar" src="./assets/alugaCarLogo.jpg" >
 </div>
<div align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/joaomacedx/alugaCar?style=flat" >
  <img alt="Made by João Macêdo" src="https://img.shields.io/badge/made%20by-João%20Macêdo-blue">
 </div>

 
**AlugaCar** is a sophisticated application designed to simplify the car rental management process. This project is being developed with a clear focus on adopting solid software engineering principles and a well-defined architecture, inspired by the **Clean Architecture** and Clean Code guidelines. These strategic choices ensure code modularity, flexibility, and ease of maintenance, promoting effective separation between business logic, the interface layer, and infrastructure.
### Requirements: 
 1. [Car Registration](./AppRequirements/modules/cars/car-registration.requirements.md)
 2. [Car Image Registration](./AppRequirements/modules/cars/car-image-registration.requirements.md)
 3. [Car Listing](./AppRequirements/modules/cars/car-listing.requirements.md)
 4. [Car Specification Registration](./AppRequirements/modules/cars/car-specification-registration.requirements.md)
 5. [Car Rental](./AppRequirements/modules/cars/car-rental.requirements.md)
### Design and Architecture Principles:

During the development of AlugaCar, we applied the **SOLID** principles, which are fundamental for creating robust and scalable software. I used references from Clean Architecture to structure the project coherently. This resulted in an architecture where each component has clearly defined responsibilities, promoting code cohesion and readability. Some **Design Patterns** were adopted, such as **Factory**, **Repository**, **Singleton**, and **Data Transfer Object**, enhancing code reusability and organization.


## 🛠 Technologies Used
- TypeScript
- Node.js
- Express
- TypeORM
- tsyringe
- Docker
- Docker-Compose

<hr>

## 🚀 How to run 🚀


Clone the project and access its folder.

```bash
$ git clone https://github.com/joaomacedx/alugaCar.git
$ cd alugaCar
```

To start it, follow the steps below:
```bash
# Install dependencies
$ npm i
```

```bash
# Build the Docker
  docker-compose build
```
```bash
# Run the container
$ docker-compose up
```

```bash
# Run the migrations
  npm run migration:run
```

## 📚 Docs 📚

  ```bash
# After starting the server, go to:

http://localhost:8080/api-docs
```

## Contribute!

I invite you to explore the detailed structure of the AlugaCar project by visiting the [official GitHub repository](https://github.com/joaomacedx/alugacar). There, you will find comprehensive information about the implementation, architecture, and design patterns used. The [official project Wiki on GitHub](https://github.com/joaomacedx/alugaCar/wiki) provides a deeper insight and can be an excellent starting point for understanding contribution guidelines. Additionally, we encourage and welcome contributions that can enrich and expand the functionalities of AlugaCar.

**AlugaCar Team**
  - 📫 You can reach me at <a href="mailto:joaomacedx@gmail.com">joaomacedx@gmail.com</a><br>
