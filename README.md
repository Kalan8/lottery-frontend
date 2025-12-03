# Frontend Lottery

This project is a Typescript/React frontend side of a web Lottery application. \
The associated backend is developed in Java and it is available at :
[`https://github.com/Kalan8/lottery-backend`](https://github.com/Kalan8/lottery-backend)

The purpose of this couple of projects is to develop a lottery application. \
A brief specification of the app is:

* provide a page for creating/importing players and display the list of registered players,
* provide another page for launching the lottery and displaying the winner(s).

The [Further Potential Features](#further-potential-features) section below presents what would
be
good to do to improve
the application.

This project was started very recently and is a work in progress but both sides can be running and interact together. \
And you can have a look in the [Changelog for Frontend/Backend projects](#changelog-for-frontendbackend-projects)
section to see more on tasks or improvements already realised in both parts of the app.

This project is mainly a sandbox for testing backend/frontend techs and concepts.



---

## Table of Contents

| Sections                                                                                                                                                                                                                                                      | Concerns                       |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------|
| <ul><li>[Actual Features](#actual-features)</li><li>[Further Potential Features](#further-potential-features)</li><li>[Changelog for Frontend/Backend projects](#changelog-for-frontendbackend-projects)</li></ul>                                            | ****Backend** / **Frontend**** | 
| <ul><li>[Frontend Internal Features](#frontend-tech-stack)</li><li>[Frontend Internal Features](#frontend-internal-features)</li><li>[Getting Started](#getting-started)</li><li>[API Integration](#api-integration)</li></ul> | ****Frontend****                |

---

### ⚠️ Notice that these 3 next sections below concern Backend and Frontend parts

## Actual Features

So far so good ! \
For now, there is a page which fetches the data from the backend and then display a player form for registering
players. The page displays dynamically the players already registered. Two buttons are present in each row of player to let
deleting the player or updating the info of the player (frontend modal not yet implemented but backend is ready).

---

## Further Potential Features

The actual specification is simple but it could be nice then to improve the app to provide more features and be more
user-friendly.
It could be good to have a simple page for people who want to register for the lottery.
An authentication system to allow an admin or administration staff to reach administration page.
On this page, the user can administrate the list of players so create/update/delete or import a file of players.
And on this page, the user can set the lottery: the number of winners and ordered/unordered winners.
The application could send mail to the registered people to indicate if they have won or lost.

---

## Changelog for Frontend/Backend projects

* **[Back]** Create an empty project and decide/install all the tools and frameworks
  needed
* **[Back]** Configure tools and frameworks basically to make the app running
* **[Back]** Structure my project and create my player entity, repository, service and
  REST controller
* **[Back]** Install My SQL and connect it to the app
* **[Front]** Decide the stack (React + TypeScript + Vite + TailwindCss) and install
  it
* **[Front]** Structure my project and create API service, a component and a page
* **[Front]** Improve API service, create UserCard and UserForm components for
  registration
* **[Front]** Add data validations (Name/Surname not empty or malformed email)
* **[Back]** Improve the service and the controller with implementing all the CRUD
  operations
* **[Front]** Implement the CRUD operations in the front codebase
* **[Front]** Refactor UserCard component and add to it Update button and Delete button
* **[Front]** Upgrade Tailwind from v3 to v4 and fix issues
* **[Front]** Adding styling libraries and dependencies
* **[Front]** Redesign the page and clean the project
* **[Back]** Add tests for UserService and UserController
* **[Back]** Fix CVE-2025-11226 Arbitrary Code Execution (ACE), forced to get a
  higher version than v1.5.18 for logback-core
  and logback-classic
* **[Back]** Add configuration and data file to populate automatically the database
  is needed
* **[Front]** Create a .env file to externalise the api backend url and make the
  frontend exposure port configurable
* **[Back]** Create CorsConfig class to configure and manage cross-origin requests
* **[Back]** Externalise the frontend URL in application.properties
* **[Back]** Make the backend URL configurable
* **[Back]** Add data validations (Name/Surname not null or empty, malformed email
  and unicity email)
* **[Back]** Create a GlobalExceptionHandler to manage all the exceptions occurred in
  the app and send back a clean http
  response to the frontend part
* **[Front]** Rework UI of the app + reorganise css/tailwind
* **[Front]** Add toggle theme and manage light and dark theme + fix FOUC issue
* **[Back]** / **[Front]** Rename user to player in all the projects as it is more appropriate
* **[Front]** Create a player page to register and make it as the home page
* **[Front]** Create a button to redirect into the lottery management page
* **[Back]** Add a logger to track application behavior, and debug/diagnose issues
* **[Front]** Add a Lottery actions section on the administration page
* **[Back]** / **[Front]** Add a random player feature + a button in the Lottery Actions section
* **[Front]** Add a button to send email to the winner

### Tasks coming soon:

* **[Back]** Create logic to send email to the winner
* **[Front]** Create a button to import multiple players by file in the lottery management page
* **[Back]** Add ability to import a file of players
* **[Back]** Create json file with data to import in Postman and add it to the repo

---

### ⚠️ Notice that these next sections below only concern Frontend part

## Frontend Tech Stack

| Technology      | Description |
|-----------------|-------------|
| **React**       | UI library for building user interfaces |
| **TypeScript**  | Strongly typed JavaScript for safer and cleaner code |
| **Vite**        | Fast build tool and dev server |
| **TailwindCSS** | Utility-first CSS framework for responsive design |
| **pnpm**        | Efficient package manager used for this project |

---

## Frontend Internal Features

* **Create Players** — Use the player form to add a new player (with name, surname, and email).
* **View All Players** — The players list automatically updates after each operation.
* **Edit Existing Players** — Update a player’s details directly via the UI (modal not implemented yet)
* **Delete Players** — Remove players from the list with a single click.
* **Live Refresh** — The list reloads automatically after each create, update, or delete operation.


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


4. The frontend will be available by default at `http://localhost:3000`
   But you can set another exposure port in the `.env` file via the `VITE_PORT` property.
   In this case, make sure to configure the new frontend url in the backend `application.properties` to let both communicate.


---

## API Integration

This frontend communicates with the backend via REST API endpoints:


| HTTP Method | Endpoint          | Description                    | Request Body (JSON) Example                                                       | Response Status  | Possible Errors                                                                                              |
|-------------|-------------------|--------------------------------|-----------------------------------------------------------------------------------|------------------|--------------------------------------------------------------------------------------------------------------|
| **GET**     | `/api/player`      | Retrieve all players             | –                                                                                 | `200 OK`         | `500 Internal Server Error`                                                                                  |
| **GET**     | `/api/player/{id}` | Retrieve a specific player by ID | –                                                                                 | `200 OK`         | `404 Not Found` if player doesn’t exist                                                                        |
| **POST**    | `/api/playes`      | Create a new player              | ```json { "name": "John", "surname": "Doe", "email": "john.doe@example.com" } ``` | `201 Created`    | `400 Bad Request` (validation error) / `409 Conlict` (DB integrity violation)                                |
| **PUT**     | `/api/player/{id}` | Update an existing player by ID  | ```json { "name": "Jane", "surname": "Doe", "email": "jane.doe@example.com" } ``` | `200 OK`         | `404 Not Found` (player not found) / `400 Bad Request` (invalid data) / `409 Conlict` (DB integrity violation) |
| **DELETE**  | `/api/player/{id}` | Delete a player by ID            | –                                                                                 | `204 No Content` | `404 Not Found` if player doesn’t exist                                                                        |


