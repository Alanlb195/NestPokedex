# NestJS - REST API based on PokeAPI

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## About the project

This is a RESTful API built using [NestJS](https://nestjs.com/), inspired by the structure of the [PokeAPI](https://pokeapi.co/). The project follows NestJS best practices, including the use of controllers, services, DTOs, and pipes. It connects to a **MongoDB** database, which runs inside a **Docker** container managed through a `docker-compose` file.

## Features
- RESTful API structure
- **NestJS** controllers, services, DTOs, and pipes
- **MongoDB** database integration
- **Dockerized** database for easy setup
- CRUD endpoints for managing data

## Prerequisites
Before running the project, make sure you have the following installed:

- **[Node.js](https://nodejs.org/)** (Recommended version: latest LTS)
- **[Docker](https://www.docker.com/)** (For MongoDB database)
- **[Nest CLI](https://docs.nestjs.com/cli/overview)** (Globally installed CLI for NestJS)

```sh
npm install -g @nestjs/cli
```

## Installation

Clone this repository and install dependencies:

```sh
git clone https://github.com/Alanlb195/NestPokedex.git
cd NestPokedex
npm install
```

## Running the project

### 1. Start the MongoDB database
Run the following command to start the MongoDB container using Docker:

```sh
docker-compose up -d
```

This will start the database in detached mode (`-d`), running in the background.

### 2. Start the NestJS server
Run the following command to start the development server:

```sh
npm run start:dev
```

### 3. Test the API
Once the server is running, you can test the API endpoints using tools like **Postman**, **cURL**, or directly in your browser.

By default, the API runs on `http://localhost:3000/api/v2`.

## Tech Stack
- **NestJS** - Framework for scalable Node.js applications
- **MongoDB** - NoSQL database
- **Docker** - Containerized database environment

