# CodeSentinel

CodeSentinel is an AI-powered code review tool that analyzes code snippets and provides instant feedback on bugs, improvements, and best practices — built as a full-stack application with a Java Spring Boot backend and a React frontend.

## Features

- Paste any code snippet and get an instant AI-generated review
- Supports multiple languages: Java, Python, C++, JavaScript
- Detects bugs, missing best practices, and potential issues
- Suggests improvements with corrected code examples
- Clean, formatted output with markdown rendering and syntax-highlighted code blocks

## Tech Stack

**Backend**
- Java, Spring Boot
- REST API architecture
- Groq API (openai/gpt-oss-20b model) for AI-powered code review

**Frontend**
- React
- react-markdown for formatted AI responses
- react-syntax-highlighter for code blocks
- Fetch API for backend communication

## Project Structure

```
CodeSentinel/
├── backend/     # Spring Boot backend
│   └── src/main/java/com/prasad/codesentinel/
│       ├── controller/   # REST controllers
│       └── service/      # Business logic + AI integration
└── frontend/    # React frontend
    └── src/
        └── App.js
```

## How It Works

1. User selects a language and pastes a code snippet into the web interface
2. Frontend sends the code and language to the Spring Boot backend via a REST API call
3. Backend forwards the code to Groq's AI model for analysis
4. AI-generated review (bugs, suggestions, improvements) is sent back and rendered with markdown formatting and syntax highlighting

## Setup

### Backend
1. Navigate to the `backend` folder
2. Add your Groq API key in `src/main/resources/application.properties`:
   ```
   groq.api.key=YOUR_KEY_HERE
   ```
3. Run the Spring Boot application (runs on `localhost:8080`)

### Frontend
1. Navigate to the `frontend` folder
2. Run:
   ```
   npm install
   npm start
   ```
3. Open `localhost:3000` in your browser

## Author

Prasad Vijay Sable
