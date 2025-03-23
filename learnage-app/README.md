# My Vue FastAPI App

This project is a web application built with a Vue.js frontend and a FastAPI backend. It is designed to provide a modern and efficient development experience.

## Project Structure

```
learnage-app
├── frontend
│   ├── src
│   │   ├── assets          # Static assets (images, fonts, etc.)
│   │   ├── components      # Vue.js components for reusable UI parts
│   │   ├── views           # Vue components defining application views
│   │   ├── App.vue         # Root component defining layout and structure
│   │   └── main.js         # Entry point for the Vue application
│   ├── public              # Directory for static files (HTML, favicon, etc.)
│   ├── package.json        # npm configuration file with dependencies and scripts
│   ├── vue.config.js       # Vue CLI configuration file for build and dev server
│   └── Dockerfile          # Dockerfile for building the frontend application
├── backend
│   ├── app
│   │   ├── main.py         # Entry point for the FastAPI application
│   │   ├── routers         # Modules for defining API routes
│   │   └── models          # Modules for defining data models
│   ├── requirements.txt    # Python dependencies for FastAPI and other libraries
│   └── Dockerfile          # Dockerfile for building the backend application
├── docker-compose.yml       # Configuration file for defining and running multi-container Docker applications
└── README.md               # Documentation for the project, including setup and usage instructions
```

## Setup Instructions

1. **Clone the repository:**

   ```
   git clone <repository-url>
   cd learnage-app
   ```

2. **Build and run the application using Docker Compose:**

   ```
   docker-compose up --build
   ```

3. **Access the application:**
   - Frontend: [http://localhost:8080](http://localhost:8080)
   - Backend: [http://localhost:8000](http://localhost:8000)

## Usage

- The frontend is built with Vue.js and can be modified in the `frontend/src` directory.
- The backend is built with FastAPI and can be modified in the `backend/app` directory.

## License

This project is licensed under the MIT License.
