<div align="center">

  <h1>⚡ Portfolio Backend API</h1>

  <p><b>A high-performance, secure, and modern RESTful API backend for personal portfolios & admin management dashboards.</b></p>

  <p>
    <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-v24.0+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"></a>
    <a href="https://expressjs.com/"><img src="https://img.shields.io/badge/Express-v5.2-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js"></a>
    <a href="https://orm.drizzle.team/"><img src="https://img.shields.io/badge/Drizzle_ORM-v0.45-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black" alt="Drizzle ORM"></a>
    <a href="https://www.postgresql.org/"><img src="https://img.shields.io/badge/PostgreSQL-Neon_DB-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL"></a>
    <a href="https://jwt.io/"><img src="https://img.shields.io/badge/JWT-Protected-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT"></a>
    <a href="https://nodemailer.com/"><img src="https://img.shields.io/badge/Nodemailer-SMTP-22ADF6?style=for-the-badge&logo=nodemailer&logoColor=white" alt="Nodemailer"></a>
  </p>

  <sub>Built with modern ES Modules, Drizzle ORM, Neon PostgreSQL, JWT Auth & Nodemailer</sub>

  <br/><br/>
</div>

---

## 📖 Overview

**Portfolio Backend** is a scalable Node.js & Express REST API designed to power personal developer portfolios and contact management systems. It provides robust user authentication, a contact submission workflow for visitors, an admin dashboard management system to review inquiry messages, and an automated email dispatcher to respond to clients directly.

### 🌟 Key Highlights

- 🔐 **JWT Authentication & Security**: Password hashing with `bcryptjs` and stateless session verification using JSON Web Tokens.
- 🗄️ **Serverless PostgreSQL Database**: Database operations powered by **Neon PostgreSQL** and **Drizzle ORM** for type-safe queries.
- ✉️ **Automated Email Dispatcher**: Integrated **Nodemailer** module to reply to visitor inquiries directly from the admin panel and automatically update contact statuses in the database.
- ⚡ **Express 5 Core**: Built on the latest Express v5 engine using native ES module (`import`/`export`) syntax.
- 💓 **Health Check Uptime Guard**: Endpoint tailored to prevent hosting platforms (like Render or Railway) from spinning down during inactivity.
- 🎨 **Custom Fallback Handler**: Custom 404 HTML fallback page for graceful handling of invalid routes.

---

## 🛠️ Tech Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Runtime** | [Node.js](https://nodejs.org/) | JavaScript runtime engine (v18+) |
| **Framework** | [Express.js v5](https://expressjs.com/) | Fast, unopinionated web framework |
| **Database** | [PostgreSQL (Neon)](https://neon.tech/) | Serverless cloud PostgreSQL database |
| **ORM** | [Drizzle ORM](https://orm.drizzle.team/) | Modern, lightweight, and type-safe TypeScript/JS ORM |
| **Authentication** | [JWT](https://jwt.io/) & [BcryptJS](https://github.com/dhar/bcryptjs) | Token authentication & secure password hashing |
| **Email Service** | [Nodemailer](https://nodemailer.com/) | SMTP email sending service |
| **Dev Tools** | [Nodemon](https://nodemon.io/) & [Drizzle Kit](https://orm.drizzle.team/kit-docs/overview) | Hot-reloading & DB migrations tool |

---

## 📁 Folder Structure

```
PortfolioBackend/
├── 📁 drizzle/
│   ├── 📄 db.js                 # PostgreSQL Neon connection pool & Drizzle init
│   ├── 📄 schema.js             # Drizzle tables definition (users, contact)
│   └── 📁 migrations/           # Generated SQL migration files
├── 📁 middleware/
│   ├── 📄 auth.js               # JWT Bearer token authentication middleware
│   └── 📄 mail.controller.js    # Nodemailer email dispatch logic & status updater
├── 📁 pages/
│   └── 📄 404.html              # Custom 404 HTML response
├── 📁 routes/
│   ├── 📄 auth.routes.js        # Auth endpoints (/register, /login, /dashboard)
│   ├── 📄 contact.routes.js     # Public contact form submission endpoint
│   ├── 📄 contact.admin.routes.js# Protected admin endpoints (GET, DELETE messages)
│   └── 📄 mail.routes.js        # Protected email reply route (/reply)
├── 📄 .env.example              # Environment variables template
├── 📄 drizzle.config.js         # Drizzle Kit CLI configuration
├── 📄 package.json              # Project metadata & dependency list
└── 📄 server.js                 # Application entry point & route bindings
```

---

## 🚀 Getting Started

Follow these instructions to get a local copy up and running on your machine.

### 📋 Prerequisites

Make sure you have the following installed:
- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)
- A **PostgreSQL** database instance (e.g., [Neon DB](https://neon.tech/) or local PostgreSQL)

### 💻 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/PortfolioBackend.git
   cd PortfolioBackend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```

   Update `.env` with your credentials:
   ```env
   PORT=5000
   DATABASE_URL="postgresql://user:password@ep-sample-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require"
   JWT_SECRET="your_secret_jwt_key_here"
   MAIL_HOST="smtp.mail.yahoo.com"
   MAIL_PORT=587
   MAIL_USER="your_email@domain.com"
   MAIL_PASS="your_smtp_app_password"
   ```

4. **Sync Database Schema**
   Push your database schema to Neon/PostgreSQL using Drizzle Kit:
   ```bash
   npx drizzle-kit push
   ```

5. **Start the Server**

   **Development Mode** (with auto-reload):
   ```bash
   npm run dev
   ```

   **Production Mode**:
   ```bash
   npm start
   ```

   The server will run on `http://localhost:5000`.

---

## ⚙️ Environment Variables Reference

| Variable | Description | Example |
| :--- | :--- | :--- |
| `PORT` | Port number for the Express server | `5000` |
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@ep-xyz.neon.tech/neondb?sslmode=require` |
| `JWT_SECRET` | Secret string for signing JSON Web Tokens | `super_secret_jwt_string_123` |
| `MAIL_HOST` | SMTP server host address | `smtp.mail.yahoo.com` or `smtp.gmail.com` |
| `MAIL_PORT` | SMTP server port | `587` (TLS) or `465` (SSL) |
| `MAIL_USER` | Admin email address used to send replies | `admin@example.com` |
| `MAIL_PASS` | App password / SMTP authentication password | `xxxx-xxxx-xxxx-xxxx` |

---

## 📡 API Endpoints Reference

### 🟢 System & Health

| Method | Endpoint | Auth Required | Description |
| :--- | :--- | :---: | :--- |
| `GET` | `/health` | ❌ | Health check & uptime monitoring |
| `GET` | `/api/health` | ❌ | Alias for health check |

**Sample Response (`GET /health`)**:
```json
{
  "status": "OK",
  "message": "Server is healthy and active",
  "timestamp": "2026-08-11T22:45:00.000Z",
  "uptime": "1420s"
}
```

---

### 🔑 Authentication (`/api/auth`)

| Method | Endpoint | Auth Required | Description |
| :--- | :--- | :---: | :--- |
| `POST` | `/api/auth/register` | ❌ | Register a new user/admin account |
| `POST` | `/api/auth/login` | ❌ | Authenticate user & receive JWT token |
| `GET` | `/api/auth/dashboard` | 🔒 Yes | Access protected dashboard route |

<details>
<summary><b>🔍 View Auth Request / Response Payload Examples</b></summary>

#### `POST /api/auth/login`
**Request Body**:
```json
{
  "email": "admin@example.com",
  "password": "securepassword123"
}
```

**Response (`200 OK`)**:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```
</details>

---

### 📩 Contact Queries (`/api`)

| Method | Endpoint | Auth Required | Description |
| :--- | :--- | :---: | :--- |
| `POST` | `/api/contact` | ❌ | Submit a new contact inquiry message |

<details>
<summary><b>🔍 View Contact Submission Payload Example</b></summary>

#### `POST /api/contact`
**Request Body**:
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "Hi, I would like to hire you for a project!"
}
```

**Response (`200 OK`)**:
```json
{
  "message": "Message sent successfully"
}
```
</details>

---

### 🛡️ Admin Contact Management (`/api/admin/contact`)

*Note: All `/api/admin/*` endpoints require a valid JWT passed in the `Authorization` header (`Bearer <TOKEN>`).*

| Method | Endpoint | Auth Required | Description |
| :--- | :--- | :---: | :--- |
| `GET` | `/api/admin/contact` | 🔒 Yes | Fetch all submitted messages (sorted by latest) |
| `DELETE` | `/api/admin/contact/:id` | 🔒 Yes | Delete a specific message by ID |

---

### 📬 Admin Mailer (`/api/admin`)

| Method | Endpoint | Auth Required | Description |
| :--- | :--- | :---: | :--- |
| `POST` | `/api/admin/reply` | 🔒 Yes | Send reply email to visitor & mark message as `contacted` |

<details>
<summary><b>🔍 View Reply Mail Payload Example</b></summary>

#### `POST /api/admin/reply`
**Request Header**: `Authorization: Bearer <YOUR_JWT_TOKEN>`  
**Request Body**:
```json
{
  "to": "jane@example.com",
  "message": "Hello Jane, thank you for reaching out! Let's schedule a call.",
  "contactId": 1
}
```

**Response (`200 OK`)**:
```json
{
  "success": true,
  "message": "Mail sent & contact marked as contacted"
}
```
</details>

---

## 🗄️ Database Schema & Drizzle ORM

The application uses **Drizzle ORM** with PostgreSQL.

### Tables Overview

1. **`users` Table**
   - `id` (Serial, Primary Key)
   - `email` (Text, Unique, Not Null)
   - `password` (Text, Hashed with bcrypt)
   - `created_at` (Timestamp, Default `now()`)

2. **`contact` Table**
   - `id` (Serial, Primary Key)
   - `name` (Varchar 100)
   - `email` (Varchar 100)
   - `message` (Text)
   - `contacted` (Boolean, Default `false`)
   - `created_at` (Timestamp, Default `now()`)

### Useful Drizzle Commands

```bash
# Push schema changes directly to the database
npx drizzle-kit push

# Generate migration SQL scripts
npx drizzle-kit generate

# Open Drizzle Studio database UI
npx drizzle-kit studio
```

---

## 🔒 Security Best Practices Implemented

- 🛡️ **Password Salting & Hashing**: All passwords are hashed with `bcryptjs` using a salt factor of 10.
- 🔑 **Bearer Token Authorization**: Protected admin routes require `Authorization: Bearer <TOKEN>` validation.
- 🌐 **CORS Configuration**: Restricts access to trusted origin endpoints (default set to `http://localhost:5173`).
- 🙈 **Environment Isolation**: Sensitive configuration (Database connection URLs, secrets, mail passwords) are isolated in `.env` files and ignored in `.gitignore`.

---

## 📄 License

This project is licensed under the **ISC License**.

---

<div align="center">
  <sub>Crafted with ❤️ for building high-quality portfolio experiences.</sub>
</div>
