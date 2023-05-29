# Building a REST API with Node.js, Express, MongoDB, and JWT

This project is a contact agenda where users can register and log in to manage their contacts. It was developed for teaching purposes, providing an opportunity to learn about non-relational databases (MongoDB) and user authentication (JWT).

## About the Project
The project aims to create a RESTful API using Node.js, Express, MongoDB, and JWT. It allows users to register and authenticate, enabling them to manage their contacts effectively.

## Used Tools
The following tools were used in the development of this project:

- **Express**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

- **MongoDB**: An open-source, non-relational database management system (DBMS) that uses flexible documents instead of tables and rows to process and store various forms of data.

- **JWT**: JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.

## Project Files
The project repository contains the following files:

### Config:
This directory contains the configuration files necessary for the example project to connect with the database.

- **dbConnection.js**: Configuration file for establishing the database connection.

### Controllers:
This directory contains the control layer files, which handle the logic between the model layer and the views.

- **contactController.js**: Controller responsible for managing contacts.
- **userController.js**: Controller responsible for managing users.

### Middleware:
This directory contains the middleware files, which provide additional functionality to the API.

- **errorHandler.js**: Middleware for handling errors in the API.
- **validateTokenHandler.js**: Middleware for validating JWT tokens.

### Models:
This directory contains the model layer files, which interact with the database.

- **contactModel.js**: Model file for managing contacts.
- **userModel.js**: Model file for managing users.

### Routes:
This directory contains the route files, where the project endpoints are organized.

- **contactRoute.js**: File for defining contact-related endpoints.
- **userRoute.js**: File for defining user-related endpoints.

# Bibliographic Reference:
- [JWT Introduction](https://jwt.io/introduction)
- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
