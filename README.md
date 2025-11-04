# Frontend demo - User Management App

This project is the **frontend interface** of a User Management application.  
It allows users to create, view, edit, and delete user records through a clean and reactive UI.  
The app is built using **React**, **TypeScript**, **Vite**, and **TailwindCSS**, and communicates with a Spring Boot backend API.
The backend project is available at `https://github.com/Kalan8/backend-demo`

Both projects are solely sandboxes for testing backend/frontend techs, concepts and does not address a specific business need.
It was started very recently and is a work in progress. A [What's next](#whats-next) section below lists the next developments that would be necessary/good to enhance the application.

---

## Table of Contents

* [Tech Stack](#tech-stack)
* [Features](#features)
* [What's next](#whats-next)
* [Getting Started](#getting-started)
* [API Integration](#api-integration)

---

## Tech Stack

| Technology     | Description |
|----------------|-------------|
| \*\*React\*\*      | UI library for building user interfaces |
| \*\*TypeScript\*\* | Strongly typed JavaScript for safer and cleaner code |
| \*\*Vite\*\*       | Fast build tool and dev server |
| \*\*TailwindCSS\*\*| Utility-first CSS framework for responsive design |
| \*\*Axios / Fetch\*\* | For API communication with the backend |
| \*\*pnpm\*\*       | Efficient package manager used for this project |

---

## Features

* **Create Users** — Use the user form to add a new user (with name, surname, and email).
* **View All Users** — The users list automatically updates after each operation.
* **Edit Existing Users** — Update a user’s details directly via the UI (modal not implemented yet)
* **Delete Users** — Remove users from the list with a single click.
* **Live Refresh** — The list reloads automatically after each create, update, or delete operation.

---

## What's next

* Move the backend URL into a .env file
* Clean the code and structure
* Clean the styling part
* Add Test side and code quality
* Add a modal to edit a user when an edit button is clicked
* Add a proper modal to confirm a user deletion or a toast notification so toast notification management

Some possible further features :

* Sign-in/sign-up
* Create a profile
* Connect with friends
* Create your own pets (dog, cat for example)
* Search people around or with a specific pet

---

## Getting Started

### Prerequisites

* Make sure you have **pnpm** installed.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Kalan8/frontend-demo.git
```

2. Build the project:

```bash
cd frontend-demo
pnpm install
```

3. Run the application:

```bash
pnpm run dev
```


4. The frontend will be available at `http://localhost:5173`

---

## API Integration

This frontend communicates with a Spring Boot backend via REST API endpoints:

| Method | Endpoint | Description |
|--------|-----------|-------------|
| \*\*GET\*\* | `/api/users` | Retrieve all users |
| \*\*POST\*\* | `/api/users` | Create a new user |
| \*\*PUT\*\* | `/api/users/{id}` | Update a user |
| \*\*DELETE\*\* | `/api/users/{id}` | Delete a user |

---
