# NestJS - REST API based on PokeAPI

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## About the project

This is a RESTful API built using [NestJS](https://nestjs.com/), inspired by the
structure of the [PokeAPI](https://pokeapi.co/). The project follows NestJS best
practices, including the use of controllers, services, DTOs, and pipes. It
connects to a **MongoDB** database, which runs inside a **Docker** container
managed through a `docker-compose` file.

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
- **[Nest CLI](https://docs.nestjs.com/cli/overview)** (Globally installed CLI
  for NestJS)

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

## Running the project in development env

### 1. Configure ENV Variables

Clone the file `.env.template` and change the name to `.env` and configure
variables

### 2. Start the MongoDB database

Run the following command to start the MongoDB container using Docker:

```sh
docker-compose up -d
```

This will start the database in detached mode (`-d`), running in the background.

### 3. Seed data

Execute a get with this url to run the seed

```sh
localhost:3000/api/v2/seed
```

### 3. Start the NestJS server

Run the following command to start the development server:

```sh
npm run start:dev
```

### 4. Test the API

Once the server is running, you can test the API endpoints using tools like
**Postman**, **cURL**, or directly in your browser.

### 6. API URL

By default, the API runs on `http://localhost:3000/api/v2`.


## Running the project in prod env (dockerized app with nest and mongo)

### 1. Configure ENV Variables

Clone the file `.env.template` and change the name to `.env.prod` and configure
variables, just uncomment and use the second option in the env.template file

### 2. Start the MongoDB database and the NestJS Application

To build and run the production-ready application inside a Docker container, execute:

```sh
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

To run it in detached mode:


```sh
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up -d
```

Once the server is running, you can test the API endpoints using tools like
**Postman**, **cURL**, or directly in your browser.

## Tech Stack

- **NestJS** - Framework for scalable Node.js applications
- **MongoDB** - NoSQL database
- **Docker** - Containerized database environment
