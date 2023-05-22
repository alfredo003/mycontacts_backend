# BUILDING A REST API WITH NODE.JS,EXRESS,MONGODB ,JWT

I built this api simply for teaching purposes, it was a very fun experience, learning more about non-relational databases (MongoDB) and user authentication (JWT).



## About the Project:

is uma agenda contacto onde o usuário se regista e   faz o login para registar os seus contactos.

## used tools:

    • Express : is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
      
    • MongoDB:is an open source, nonrelational database management system (DBMS) that uses flexible documents instead of tables and rows to process and store various forms of data. 
      
    • JWT:JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.


## Project Files:

Config:Configuration directory where we attach all the config files of the example project to connect with the database.

    • dbConnection.js
      
Controllers: 
directory of the control layer where we attach our class controllers, that is, the layers that make the intersection between the modal layer and our views

    • contactController.js
    • userController.js
      
middleware:
    • errorHandler.js
    • validateTokenHandler.js
      
models: model layer directory that receives data from the control layer and interacts with the database.

    • contactModel.js
    • userModel.js

routes: directory where we attach the project routes where we organize our EndPoints

    • contactRoute.js
    • userRoute.js
# Bibliographic Reference:
<a href="https://jwt.io/introduction">https://jwt.io/introduction</a>
<a href="https://www.mongodb.com/">https://www.mongodb.com/</a>
<a href="https://expressjs.com/">https://expressjs.com/</a>