# ResumeX 
Create, customize, and share stunning resumes effortlessly.

[🔗 Live Demo](https://resume-x-8s55.vercel.app)

ResumeX is a web application that helps users build professional resumes with ease. It offers multiple modern templates, AI-powered content generation using OpenAI, and options to save, edit, and download resumes in various formats. Users can also upload existing resumes to update or redesign them using ResumeX’s smart editor.

## Screenshots

### Home Page
The landing page where users get an overview of ResumeX and start creating their resume.

<img src="/frontend/public/screenshot2.png" alt="ResumeX Home Page" width="100%" />

### Dashboard
The user dashboard showing saved resumes, recent activity, and quick actions.

<img src="/frontend/public/screenshot3.png" alt="ResumeX Home Page" width="100%" />

### Resume Builder
The main resume builder interface with templates, sections, and AI-powered content suggestions.

<img src="/frontend/public/screenshot1.png" alt="ResumeX Home Page" width="100%" />
## Tech Stack

### Frontend
- **React 19** & **React DOM** – Component-based UI for building the ResumeX interface.
- **Vite** – Fast dev server and bundler for the frontend.
- **Redux Toolkit** & **React Redux** – Global state management for user data and resumes.
- **React Router DOM** – Client-side routing (home, dashboard, resume builder).
- **Tailwind CSS** & **@tailwindcss/vite** – Utility-first styling and responsive design.
- **Axios** – HTTP client for communicating with the backend API.
- **Lucide React** – Icon library for clean and modern UI icons.
- **React Hot Toast** – Toast notifications for feedback and alerts.
- **react-pdftotext** – Extracting text content from uploaded PDF resumes.

### Backend
- **Node.js** & **Express 5** – REST API server for authentication, resumes, and AI features.
- **MongoDB** & **Mongoose** – NoSQL database and ODM for storing users and resumes.
- **JSON Web Token (JWT)** – Authentication and protected routes.
- **bcrypt** – Password hashing and security.
- **Multer** – Handling file uploads (resumes and assets).
- **ImageKit Node SDK** – Media storage and optimization for uploaded files.
- **OpenAI Node SDK** – AI-powered resume content generation for different sections.
- **CORS** & **dotenv** – Cross-origin configuration and environment variable management.

### Development & Tooling
- **ESLint** with React plugins – Linting and code quality for the frontend.
- **Nodemon** – Auto-restart for the backend during development.

## Deployment

This project is deployed on **Vercel**, which handles automatic builds and deployments from the main branch of the repository.  
The frontend is served as a Vite React app, and the backend API is exposed via server deployment/configuration connected to the same Vercel project or environment.  

You can access the live application here:  
[🔗 Live Demo](https://resume-x-8s55.vercel.app)
