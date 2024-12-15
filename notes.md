# men-stack-crud-app-fruits

## M.E.N

### Model-View-Controller (MVC) architecture

- Client: The browser or application initiating HTTP requests.

- Server: Listens for and processes incoming HTTP requests.

- server.js: The core of the application, orchestrating routes, middleware, database connections, and Express server setup.

- Controllers (in server.js): Handle specific request routes, interact with Mongoose models, and coordinate data flow between the model and view.

- Model (Mongoose): Interfaces with MongoDB, ensuring data adheres to predefined schemas.

- Database (MongoDB): Stores and manages data persistently, accessed via cloud-based MongoDB Atlas in this application.

- View (EJS): Utilizes templating to generate dynamic HTML pages. By integrating JavaScript into templates, EJS produces HTML that changes based on the data provided.

### CRUD (Create, Read, Update, Delete)

### Tech Employed Methods

- MongoDB: A document-based database for storing data persistently.

      - a free, an open-source, non-relational database management system (DBMS) that stores and processes data in documents instead of tables and rows in JSON-like documents

- Express: A web framework managing the request-response cycle within the application.

      - a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.

- Node.js: Executes JavaScript code outside of a browser, in a terminal environment.

      - an open-source, cross-platform JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser.

- JavaScript: The backbone programming language used in this tech stack.

- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js, simplifying interactions with the database and enforcing data structure through schemas.

- EJS (Embedded JavaScript): The template engine for rendering dynamic HTML pages based on data.

###

## [MongoDB Atlas](https://cloud.mongodb.com/v2/674e6e432452c33b0b5c05c7#/overview)

      - a cloud database service, along with Mongoose, an Object Data Modeling (ODM) library for MongoDB and Node.js.

- tip: 'i' is shortcut for install

- Ignoring node_modules is not about security, though. Rather, it reduces the amount of code in our repo by eliminating third party packages that can easily be installed via npm

SECRET_NUMBER=??
PASSWORD=12345

The above code would allow an application to access the SECRET_NUMBER, and PASSWORD properties on a process.env object.

### Create the fruits schema

 //models/fruit.js

const mongoose = require("mongoose");

### The show route

- The :fruitId in the URL is a variable segment, known as a URL parameter. It allows our route to dynamically handle requests for different fruits by their unique IDs. So, whenever a user wants to view details about a particular fruit, they will navigate to a URL like /fruits/12345, where 12345 is the fruit’s ID.

- Like our show route, we’ll use Fruit.findById(req.params.fruitId) to find the specific fruit in our database. The req.params.fruitId captures the ID from the URL.

- Since finding a fruit is an asynchronous operation, we use async before our route callback function and await before the findById method. This ensures that the server waits for the fruit to be found before moving to the next line of code.

- Lastly, let’s modify our route so that it renders views/fruits/edit.ejs, passing in the foundFruit variable we created above:

### EDIT form

- The Edit form needs to make a PUT request to /fruits/:fruitID in the same way that the New form needs to make a POST request to /fruits.

- Remember, that browsers don’t support PUT requests, so we will use the same method-override middleware as we did with the delete route. We’ll append ?_method=PUT to the end of our action URL:
