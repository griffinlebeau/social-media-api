# Sample Social Media API
- Template back-end database for a simple API featuring users, thoughts (posts), reactions (replies to posts), and friends (other users) built with MongoDB and Mongoose

### Walkthrough: https://drive.google.com/file/d/1qyrvnDCy3d-qljvwZaim_MA3Al_8i3Xt/view
- Walkthrough video shows all standard routes tested in Insomnia with test data

### Instructions
- Download files from repository to local machine
- Run `npm install` to install necessary packages
- Run `npm run start` to start server and connect database 
- Access database with front-end via fetch api at defined routes

### Features
- Model/Controller/Route structure utilized for easy to manage code
- Utilizes Mongoose Object Data Modeling for model building
- MongoDB NoSQL database allows large amounts of unstructured data
- Easily updated and augmented controller and routing system


### Standard Routes
- /api/users -> GET all users, POST user
- /api/users/:userId -> GET single user by id, PUT user by id, DELETE user by id
- /api/users/:userId/friends/:friendId -> POST friend to user via ids, DELETE friend from user via ids
- /api/thoughts -> GET all thoughts
- /api/thoughts/:userId -> POST thought
- /api/thoughts/:thoughtId -> GET single thought by id, PUT thought by id, DELETE thought by id
- /api/thoughts/:thoughtId/reactions -> POST reaction to thought
- /api/thoughts/:thoughtId/reactions/:reactionId -> DELETE reaction by id
