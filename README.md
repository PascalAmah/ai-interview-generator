# AI Interview Question Generator

A lightweight AI-powered application that generates thoughtful, role-specific interview questions using the Gemini API.

Built with a strong focus on:

- simplicity
- fast iteration
- clean architecture
- maintainability
- product-oriented UX

---

## Overview

This application allows users to enter a job title and instantly generate 3 tailored interview questions using AI.

The project was intentionally designed to prioritize:

- readable code
- lightweight architecture
- responsive user experience
- practical product decisions
- AI workflow clarity

---

## Features

- Generate role-specific interview questions
- Gemini AI integration
- Loading states
- API error handling
- Responsive UI
- Clean typography
- Markdown rendering for AI responses
- Disabled submit state during requests

---

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS

### AI

- Gemini 2.5 Flash API

### Deployment

- Vercel

---

## Architecture

```txt
src/
├── components/
│   ├── JobForm.jsx
│   ├── QuestionList.jsx
│   ├── Loader.jsx
│   └── ErrorMessage.jsx
├── services/
│   └── gemini.js
├── App.jsx
├── main.jsx
└── index.css
```

### Architectural Philosophy

The application intentionally uses:

- React hooks only
- minimal abstractions
- separated API layer
- lightweight component structure

This approach improves:

- readability
- maintainability
- iteration speed

---

## Setup Instructions

### 1. Clone Repository

```bash
git clone <your-repository-url>
```

### 2. Navigate Into Project

```bash
cd ai-interview-generator
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the project root:

```env
VITE_GEMINI_API_KEY=your_api_key_here
```

### 5. Run Development Server

```bash
npm run dev
```

---

## Gemini Prompt Strategy

The application uses structured prompting to generate higher-quality interview questions.

Example:

```txt
You are an expert hiring manager.

Generate 3 thoughtful and role-specific interview questions
for a candidate applying for the role: "${jobTitle}"

Requirements:
- Questions should assess strategic thinking, communication, and role competency
- Avoid generic questions
- Return only a markdown bullet list.
- Do not include explanations or assessment labels.
```

The goal was to demonstrate:

- AI fluency
- prompt engineering awareness
- product-oriented output generation

---

## Product Decisions

### Why React + Vite?

- Fast development experience
- Lightweight setup
- Excellent iteration speed

### Why Gemini Flash?

- Fast inference speed
- Strong free tier
- Simple developer experience
- Well-suited for lightweight AI workflows

### Why Lightweight Architecture?

The project intentionally avoids:

- overengineering
- unnecessary libraries
- complex state management

Priority was placed on:

- clarity
- maintainability
- speed of execution

---

## Error Handling

The application uses user-friendly error messaging:

```txt
Something went wrong. Please try again.
```

This avoids exposing raw API errors directly to users and reflects production-aware UX decisions.

---

## Future Improvements

If given more time, potential enhancements include:

- response streaming
- prompt customization
- copy-to-clipboard functionality
- response history
- caching
- analytics
- rate limiting
- improved prompt consistency
- regeneration functionality

---

## Deployment

The application is deployed on Vercel.

Add your deployment link here:

```txt
https://ai-interview-generator-two.vercel.app/
```

---

## Loom Walkthrough

Add your Loom walkthrough link here:

```txt
hhttps://www.loom.com/share/3b63dd0d6a9b4369999258adfbd0f500
```

---

## Philosophy

I believe software should be:

- understandable
- iterative
- user-focused
- practical

This project intentionally prioritizes clarity and product thinking over unnecessary complexity.
