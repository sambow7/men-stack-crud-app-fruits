# men-stack-crud-app-fruits

## M.E.N

- MongooseDB

      - a free, an open-source, non-relational database management system (DBMS) that stores and processes data in documents instead of tables and rows in JSON-like documents

- Express

      - a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.

- Node.js

      - an open-source, cross-platform JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser.


###

## [MongoDB Atlas](https://cloud.mongodb.com/v2/674e6e432452c33b0b5c05c7#/overview)

      - a cloud database service, along with Mongoose, an Object Data Modeling (ODM) library for MongoDB and Node.js.


- #### tip: 'i' is shortcut for install

- #### Ignoring node_modules is not about security, though. Rather, it reduces the amount of code in our repo by eliminating third party packages that can easily be installed via npm

SECRET_NUMBER=??
PASSWORD=12345

The above code would allow an application to access the SECRET_NUMBER, and PASSWORD properties on a process.env object.

### Create the fruits schema

// models/fruit.js

const mongoose = require("mongoose");
