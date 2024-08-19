HElP CENTER WEB PAGE
--------------------
This project is a Help Center web application built using the MERN stack. It allows users to search and view details about various help topics

Technologies Used-

Frontend:
----------
HTML: Structure and layout of the web pages.
CSS: Styling and responsive design.
React.js: Frontend framework for building interactive user interfaces.

Backend:
--------
Node.js: JavaScript runtime environment.
Express.js: Web framework for Node.js, used to create RESTful APIs.
MongoDB: NoSQL database for storing help topics and related information.

Additional Tools:
-----------------
Axios: For making HTTP requests from the frontend to the backend API.
Bootstrap and tailwind css : For UI components and responsive design.
Mongoose: ODM library for MongoDB, used for schema definition and data modeling.

Features
--------
Search Functionality: Users can search for help topics by ID, and the relevant information is retrieved from the backend and displayed on the frontend.
Dynamic Content Display: The page dynamically displays the content based on user search input.
Error Handling: If a search query does not match any existing records, a "Card not found" message is displayed.

Installation
-------------
Clone the repository:
---------------------
git clone https://github.com/SurajKumar798/Help_center.git

Navigate to the project directory:
----------------------------------
cd Assignment

Install dependencies for the frontend:
--------------------------------------
cd fullstack-assignment
npm install

Install dependencies for the backend:
-------------------------------------
cd fullstack-assignment-backend
npm install

Start the backend server:
-------------------------
npm start

Start the frontend development server:
--------------------------------------
cd fullstack-assignment
npm start

Open the application:
----------------------
The frontend will run on http://localhost:3000
The backend API will be accessible on http://localhost:4000

API Endpoints;
--------------
localhost:3000/cardDetails : Get all the cards.
localhost:3000/cardDetails/:card_id : Get the card according to the id.
