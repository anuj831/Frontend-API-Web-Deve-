# User Management App

This application provides a basic user management system with functionalities to add, update, and delete users via a simple web interface.

## Features

- **Add User:** Allows users to add new users by providing a name and email.
- **Display Users:** Fetches and displays the list of users from the backend API.
- **Edit User:** Enables users to update a user's name.
- **Delete User:** Allows users to remove a user from the system.

## Technologies Used

- **Backend:** Node.js, Express.js
- **Frontend:** HTML, JavaScript
- **Communication:** Fetch API for making requests to the backend server
- **Other Libraries:** `body-parser`, `cors` for handling backend requests

## Installation

1. Clone this repository: `git clone <repository_url>`
2. Navigate to the project directory: `cd user-management-app`
3. Start the backend server: `node server.js`
4. Open `index.html` in a web browser to use the application.

## Usage

1. Access the application via the web browser.
2. Use the provided form to add new users.
3. The user list will display existing users with options to edit or delete them.

## API Endpoints

- **GET /users:** Retrieve all users.
- **POST /users:** Add a new user.
- **PUT /users/:id:** Update a user's name by ID.
- **DELETE /users/:id:** Delete a user by ID.

## Contributors

- [Anuj Pandey](https://github.com/anuj831)


Feel free to contribute, report issues, or suggest enhancements!

