# 🎬 Movie Management API  

A simple **Movie Management API** built for backend assignment. Supports full CRUD operations with Swagger documentation, unit tests, and coverage reporting.  

---

## 📌 Features  
- Full **CRUD** for movies (`GET, POST, PUT, DELETE`)  
- **Swagger/OpenAPI Docs** auto-generated  
- **Unit tests** with Jest + Supertest  
- **Coverage reports** (`npm run coverage`)  
- Error handling & validation  

---

## 🛠️ Tech Stack  
- **Node.js** + **Express**  
- **Jest** + **Supertest** (testing)  
- **Swagger-UI-Express** (docs)  
- **In-memory DB** (can be replaced with MongoDB/SQLite/Postgres)  

---

## 📂 Project Structure  
```

src/
├── controllers/   # Request handlers
├── services/      # Business logic
├── dao/           # Database logic
├── models/        # Movie schema/model
├── app.js         # Express app
└── server.js      # App entry point
tests/              # Unit + integration tests

````

---

## ⚡ Getting Started  

### 1️⃣ Clone the repo  
```bash
git clone <your-repo-link>
cd movie-api
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run locally

```bash
npm start
```

API will be available at:

```
http://localhost:3000
```

---

## ✅ API Endpoints

| Method | Endpoint      | Description        |
| ------ | ------------- | ------------------ |
| GET    | `/movies`     | Get all movies     |
| GET    | `/movies/:id` | Get movie by ID    |
| POST   | `/movies`     | Create new movie   |
| PUT    | `/movies/:id` | Update movie by ID |
| DELETE | `/movies/:id` | Delete movie by ID |

---

## 🧪 Testing

Run unit + integration tests:

```bash
npm test
```

Run tests with **coverage report**:

```bash
npm run coverage
```

A detailed HTML coverage report will be generated inside:

```
coverage/lcov-report/index.html
```

---

## 📖 Swagger Docs

Once running locally, open Swagger UI here:

```
http://localhost:3000/docs
```
