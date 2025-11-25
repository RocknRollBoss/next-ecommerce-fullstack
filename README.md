# Next Ecommerce Fullstack

A complete full-stack e-commerce application built with **Next.js (App Router)**, **TypeScript**, **RTK Query**, **Prisma**, **SQLite**, **TailwindCSS**, and **shadcn/ui**.

Authentication uses **JWT** (login, register, getMe). Products are stored in a SQLite database and preloaded with a **seed script**.

---

## 🚀 Features

### 🛍️ Store Functionality

* Live **search with dropdown previews**
* **Category filtering** (electronics, books, clothing, etc.)
* **Sorting** options:

  * Rating ↑ / ↓
  * Price ↑ / ↓
* **Favorites** (available for all users)
* **Cart** (available only for authenticated users)
* Product cards with:

  * image
  * title
  * price & discount price
  * rating
  * favorite toggle
  * add-to-cart
* Product detail page with extended data and cart/favorite buttons

### 🔐 Authentication

* **JWT-based auth**
* Endpoints:

  * Register
  * Login
  * getMe

### 🗄️ Database / Backend

* **SQLite** used as database
* **Prisma ORM** for models and migrations
* Products loaded via **seed script**

### 🎨 UI / Frontend

* **TailwindCSS** styling
* **shadcn/ui** components
* Responsive layout
* Dropdowns, modals, and dynamic UI interactions

---

## 🧩 Stack

* **Next.js (App Router)**
* **TypeScript**
* **Redux Toolkit + RTK Query**
* **Prisma ORM**
* **SQLite**
* **TailwindCSS**
* **shadcn/ui**

---

## 📁 Project Structure

```
app/
components/
prisma/
hooks/
lib/
store/
utils/
```

---

## ▶️ Running the Project

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Prisma setup:

```bash
npx prisma migrate dev
npx prisma generate
```

Seed DB:

```bash
npm run seed
```

---

## 🌍 Deployment

The project is deployed on Render:https://next-ecommerce-fullstack.onrender.com/.

---

## 📸 Screenshots

### Search Dropdown

![](/mnt/data/search-dropdown.png)

### Home Page with Sorting

![](/mnt/data/home-sorting.png)

### User Menu / Profile Dropdown

![](/mnt/data/profile-dropdown.png)

### Product Grid View

![](/mnt/data/product-grid.png)

### Login Modal

![](/mnt/data/login-modal.png)

---

## 📜 License

MIT

---
