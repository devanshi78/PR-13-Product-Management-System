# 🛒 Product Management System (Node.js + Express + MongoDB)

A full-stack **Product Management System** built using **Node.js, Express, MongoDB, and EJS**.  
This application supports **Admin and User roles**, product management, categories, sales, and purchases.

---

## 📌 Features

### Admin Panel
- Admin authentication
- Manage products (Add / Edit / Delete)
- Manage categories
- Manage users
- View sales and purchases

### User Panel
- User authentication
- View products
- View categories
- User profile access

---

## 🔐 Default Login Credentials

### 👨‍💼 Admin Login
- **Email:** `admin@gmail.com`
- **Password:** `1234`

### 👤 User Login
- **Email:** `user@gmail.com`
- **Password:** `1234`

---

## 🌐 Live Project Link

🔗 **Live Demo:**  
```
https://your-live-project-link.com
```

---

## 📂 Project Structure

```
PR-13-PRODUCT-MANAGEMENT
│
├── configs
│   └── db.js
│
├── controllers
│   ├── admin.controller.js
│   ├── category.controller.js
│   ├── client.controller.js
│   ├── product.controller.js
│   ├── purchase.controller.js
│   └── sale.controller.js
│
├── middlewares
│   ├── imageUpload.js
│   └── userAuth.js
│
├── models
│   ├── category.model.js
│   ├── product.model.js
│   ├── purchase.model.js
│   ├── sale.model.js
│   ├── user.model.js
│   └── role.model.js
│
├── routes
│   ├── admin.routes.js
│   ├── category.routes.js
│   ├── index.js
│   ├── product.routes.js
│   ├── purchase.routes.js
│   ├── sale.routes.js
│   └── user.routes.js
│
├── uploads
├── views
├── .env.example
├── index.js
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

1. Clone the repository
```bash
git clone <your-repo-url>
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` file
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

4. Start the server
```bash
npm start
```

---

## 🖼️ Screenshots

Add screenshots inside a `screenshots` folder.

---

## 🛠️ Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- Bootstrap

---

## ✨ Author
Developed by **Devu**
