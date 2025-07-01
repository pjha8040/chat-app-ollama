# Ollama Chat App

This is a full-stack chat application built with the MERN stack (MongoDB, Express.js, React, Node.js) and integrated with Ollama for local AI model interaction. It allows users to chat with local AI models like `qwen3:4b` and `gemma3` directly from their browser, view chat history, and switch between light and dark modes.

## Features

- **Local AI Chat:** Interact with powerful local AI models (e.g., `qwen3:4b`, `gemma3`) using Ollama.
- **Chat History:** View and manage your past conversations.
- **Light/Dark Mode:** Seamlessly switch between light and dark themes with preference persistence.
- **Responsive Design:** Enjoy a consistent experience across various devices.
- **Modern UI:** Built with React and styled using Tailwind CSS for a clean and intuitive interface.

## Technologies Used

**Frontend:**

- React.js
- React Router DOM
- Tailwind CSS
- Axios (for API calls)
- Lucide React (for icons)

**Backend:**

- Node.js
- Express.js
- MongoDB (for database)
- Mongoose (ODM for MongoDB)
- Cors (for cross-origin requests)
- Nodemon (for development)

**AI Integration:**

- Ollama

## Setup and Installation

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js:** [Download & Install Node.js](https://nodejs.org/en/download/) (LTS version recommended)
- **MongoDB:** [Install MongoDB Community Edition](https://docs.mongodb.com/manual/installation/)
- **Ollama:** [Download & Install Ollama](https://ollama.com/download)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ollama-chat-app.git
cd ollama-chat-app
```

### 2. Install Ollama Models

After installing Ollama, pull the required models. Open your terminal and run:

```bash
ollama pull qwen3:4b
ollama pull gemma3
```

You can verify the models are installed by running `ollama list`.

### 3. Backend Setup

Navigate to the `backend` directory, install dependencies, and start the server.

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory and add your MongoDB URI:

```
MONGO_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection string (e.g., `mongodb://localhost:27017/ollamachat` for local or a MongoDB Atlas URI).

Start the backend server:

```bash
npm start
```

The backend server will run on `http://localhost:5000`.

### 4. Frontend Setup

Open a new terminal, navigate to the `frontend` directory, install dependencies, and start the development server.

```bash
cd ../frontend
npm install
npm run dev
```

The frontend development server will typically run on `http://localhost:5173` (or another available port).

### 5. Access the Application

Open your web browser and navigate to `http://localhost:5173` (or the port indicated by `npm run dev`).

## Project Structure

```
ollama-chat-app/
├── backend/
│   ├── index.js             # Backend entry point
│   ├── package.json         # Backend dependencies
│   ├── models/
│   │   └── Chat.js          # Mongoose Chat model
│   └── .env.example         # Example environment variables
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.css          # Main application CSS (now minimal)
│   │   ├── App.jsx          # Main React component, handles routing
│   │   ├── index.css        # Tailwind CSS imports
│   │   ├── main.jsx         # React entry point
│   │   ├── assets/
│   │   ├── components/
│   │   │   └── Navbar.jsx   # Navigation bar component
│   │   └── pages/
│   │       ├── Chat.jsx     # Chat interface page
│   │       ├── History.jsx  # Chat history page
│   │       ├── Home.jsx     # Home page
│   │       └── Contact.jsx  # Contact page
│   ├── index.html           # HTML entry file
│   ├── package.json         # Frontend dependencies
│   └── vite.config.js       # Vite configuration
└── README.md                # Project README
```

## Usage

1.  **Home Page:** Provides an overview of the application and links to other sections.
2.  **Chat:** Select an AI model and start a conversation. Your questions and the AI's answers will be displayed.
3.  **History:** View all your past chat interactions.
4.  **Contact:** Find information to reach out to the developer.
5.  **Light/Dark Mode Toggle:** Use the moon/sun icon in the navigation bar to switch themes. Your preference will be saved.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue.

## License

This project is open source and available under the [MIT License](LICENSE).
