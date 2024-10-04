# Task Management Application

This application is a simple task management system built with a React frontend and an Express backend. It allows users to create, view, and complete tasks.

## Project Structure

- **Frontend**: Located in the `./frontend` directory, built with React.
- **Backend**: Located in the `./backend` directory, built with Express.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

## Getting Started

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd ./backend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the backend server:

   ```bash
   node server.js
   ```

   The backend server will run on `http://localhost:3001`.

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd ./frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:

   ```bash
   npm start
   ```

   The frontend application will run on `http://localhost:3000`.

## Available Scripts

### Backend

- **`node server.js`**: Starts the backend server.

### Frontend

- **`npm start`**: Runs the app in development mode.
- **`npm test`**: Launches the test runner.
- **`npm run build`**: Builds the app for production.
- **`npm run eject`**: Ejects the app from Create React App configuration.

## API Endpoints

### Backend

- **POST `/tasks`**: Create a new task.
- **PUT `/tasks/:id/complete`**: Mark a task as completed.
- **GET `/tasks`**: Retrieve all tasks.

## Learn More

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)
- [Express Documentation](https://expressjs.com/)

## License

This project is licensed under the MIT License.