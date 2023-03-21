# Package

* Express - Framework
* Prisma - ORM
* Express-Validator - Validator
* Swagger-Autogen - Gernerate Document
* Eslint - Syntax Check
* Jest,Supertest - API Endpint Test

# Before Running

## Download Packages
```
npm i
```

## Setup Environment Variables
Create .env file then have the following content
```
DATABASE_URL = "mysql://root:illusion-admin@0.0.0.0:2001/code_island"
HOST_URL = "http://localhost:3001"
JWT_SECRET = "hashHere"
```

## Setup Database
```
npx prisma migrate dev --name init
```

# Running

## Start Development
```
npm run dev
```

## Generate Swagger Document
```
npm run swagger-autogen
```

## Start Testing
```
npm run test
```

# Folder Structure
First, you will see three main folders. The `tests` folder has all the test code to test API endpoints. The `prisma` folder has 'schema.prisma' which will be our database schema, and a seed file to initialize the database content. The `src` folder houses the source code.

Let's take a look at `src` folder, `init` folder houses Express and Prisma connection.

`config` folder declare environment variables and any other configuration.

Then, we have the `routes` folder which will have a single file for each logical set of routes, and you will have to write your endpoints here.

Before or after validation you may have to do some process to request content. Then, you will need middleware and you can save those function in `middleware` folder

Every endpoint will have to validate the request content, and that's what the `validations` folder is for. You will have your endpoint's validation file here.

After validation you will have to handle the main part of your endpoint, and that's the `handlers` job to deal with.

When you are validating or handling you will use some functions that are connected to the database or not. If it does, store it in `helpers` folder or store it in `utils` folder.

`types` folder is the easist part, just storage types :D

