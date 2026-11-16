# Student Management REST API

A backend-only Student Management REST API built using **Node.js and Express.js**. This project allows users to perform CRUD operations (Create, Read, Update, Delete) on student records.

## Technologies Used
- Node.js
- Express.js
- JavaScript
- JSON file storage
- Postman (API testing)

## Features
- Add new student records.
- View all students.
- Retrieve a student using their ID.
- Update existing student details.
- Delete student records.
- Validate required fields.
- Prevent duplicate USNs.
- Handle errors such as missing students.

## API Endpoints

| Method | Endpoint | Operation |
|---|---|---|
| GET | `/students` | View all students |
| GET | `/students/:id` | View a student by ID |
| POST | `/students` | Add a student |
| PUT | `/students/:id` | Update student details |
| DELETE | `/students/:id` | Delete a student |

## Installation and Execution

1. Install Node.js.
2. Install Express.js:

```bash
npm install express
```

3. Start the server:

```bash
node student-api.js
```

4. Server runs at:

```text
http://localhost:3011
```

## API Testing

All API endpoints are tested using Postman by sending GET, POST, PUT, and DELETE requests.

## Storage

Student records are stored in a local JSON file (`students.json`), so the project does not require a database.

## Learning Outcomes
- Understanding REST APIs.
- Working with Express.js routes.
- Handling HTTP methods and status codes.
- Processing JSON request bodies.
- Implementing CRUD operations.
- Reading and writing JSON files using Node.js.
- Testing APIs using Postman.

