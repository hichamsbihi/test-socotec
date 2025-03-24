# User  Management Frontend

This frontend application is designed to manage user profiles with a modern React architng TypeScript. 

## Application Structure

The application is divided into multiple components, each serving a specific purpose. Each component is organized as follows:

- Every component has its own directory
- Each component directory contains an `index.tsx` entry file that exports the component

The UserList component is responsible for displaying a table of users with their information. This component is composed of two important subcomponents:

 **Edit Component**: Handles the editing functionality for user information through a modal form
 **Delete Component**: Manages the user deletion process with confirmation dialogs

###################################################################################################################################################################
# User Profile Management API

This Node.js backend application provides a RESTful API for user profile management. The application follows a structured architecture pattern 
that separates concerns into distinct layers for better maintainability and scalability.

## Component Responsibilities

### Config

- **db.ts**: Handles database connection setup and configuration
- **server.ts**: Configures the Express server, including global middleware

### Middleware
- Middleware are used by routes to perform pre-processing on requests

### Models

- Defines data schemas and models using Mongoose
- **User.ts**: User model with properties like firstName, lastName, email, etc.

### Routes
- Defines API endpoints and maps them to controller functions
- Routes are organized by resource 
- Example: `/api/users` endpoints are defined in `userRoutes.ts`

### Controllers

- Handle HTTP requests and responses
- Call appropriate service functions for business logic
- Manage request validation and error handling
- Return appropriate HTTP status codes and response formats

### Services
- Contain core business logic
- Handle database operations through models
- Services are called by controllers and return results

## API Endpoints

The API provides the following endpoints for user management:

- `GET /api/users`: Get all users
- `GET /api/users/:id`: Get user by ID
- `POST /api/users`: Create a new user
- `PUT /api/users/:id`: Update an existing user
- `DELETE /api/users/:id`: Delete a user

## Getting Started


### Installation

```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Start the server in development mode
npm run dev

# Build for production
npm run build

# Start in production mode
npm start
```

### Docker Support

The application can be run using Docker:

```bash
# Build and run with Docker
docker-compose -f ../provisioning/docker-compose.yml up -d
```

