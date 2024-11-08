
# ReactJS & NestJS & MariaDB Article CRUD Application with Docker

This is a full-stack CRUD application built with ReactJS for the frontend and NestJS for the backend. The application is containerized with Docker, allowing easy setup and deployment.


## Technologie Stack

**Frontend:** React, Material UI, TypeScript, Axios, Docker

**Backend:** NestJS, TypeORM, MariaDB, Docker

**Database:** MariaDB


## Installation

### Prerequisites

**Node.js (v16 or later)**

**Docker**

### Installation

#### Clone the repository

```
git git@github.com:rojonantenaina/article.git

cd article
```


#### Install dependencies

```
cd frontend

npm install

cd ../backend

npm install
```

#### Environment Variables

Create .env files in both the frontend and backend directories

# Project Structure

```
├── frontend                # React frontend
│   ├── public
│   ├── src
│   ├── Dockerfile
│   └── .env
├── backend                 # NestJS backend
│   ├── src
│   ├── Dockerfile
│   └── .env
└── docker-compose.yml      # Docker Compose file




```


# Environment Variables
## Backend (backend/.env)
```
DB_HOST=mariadb
DB_PORT=3306
DB_USER=root
DB_PASSWORD=password
DB_NAME=mydb
```
## Frontend (frontend/.env)
```
BACKEND_API_URL=http://localhost:3001
PORT=3000

```

# Docker
Docker is used to create and run containers for both the backend and frontend.

## Build and Run with Docker
### Run Docker Compose

```docker-compose up --build```

This will build and start all services as defined in docker-compose.yml.

### Access the Application

Frontend: http://localhost:3000

Backend API: http://localhost:3001

Adminer interface: http://localhost:3306

### Useful Docker Commands

Stop all services:


```docker-compose down```


### View logs for all services:



```docker-compose logs -f <backend|frontend|mariadb>```


### Rebuild a specific service:



```docker-compose up --build <backend|frontend|mariadb>```