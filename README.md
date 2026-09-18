# CodeSentinel

CodeSentinel is an AI-powered code review tool that analyzes code snippets and provides instant feedback on bugs, improvements, and best practices — built as a full-stack application with a Java Spring Boot backend and a React frontend.

## Features

- Paste any code snippet and get an instant AI-generated review
- Detects bugs, missing best practices, and potential issues
- Suggests improvements with corrected code examples
- Clean, simple web interface

## Tech Stack

**Backend**
- Java, Spring Boot
- REST API architecture
- Hugging Face Inference API (Qwen2.5-Coder-32B-Instruct model)

**Frontend**
- React
- Fetch API for backend communication

## Project Structure

```
CodeSentinel/
├── Code Sentinel/     # Spring Boot backend
│   └── src/main/java/com/prasad/codesentinel/
│       ├── controller/   # REST controllers
│       └── service/      # Business logic + AI integration
└── codesentinel-frontend/  # React frontend
```

## How It Works

1. User pastes a code snippet into the web interface
2. Frontend sends the code to the Spring Boot backend via a REST API call
3. Backend forwards the code to Hugging Face's AI model for analysis
4. AI-generated review (bugs, suggestions, improvements) is sent back and displayed to the user

## Setup

### Backend
1. Navigate to the `Code Sentinel` folder
2. Add your Hugging Face API token in `src/main/resources/application.properties`:
   ```
   huggingface.api.token=YOUR_TOKEN_HERE
   ```
3. Run the Spring Boot application (runs on `localhost:8080`)

### Frontend
1. Navigate to the `codesentinel-frontend` folder
2. Run:
   ```
   npm install
   npm start
   ```
3. Open `localhost:3000` in your browser

## Author

Prasad Vijay Sable
