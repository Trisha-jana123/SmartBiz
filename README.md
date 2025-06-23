# 💼 SmartBiz – Role-Based Digital Ledger (Angular)

**SmartBiz** is a role-based digital ledger application built with **Angular**, designed for small businesses. It simulates real-world shop operations with separate dashboards and permissions for **Admins** and **Employees**.

> 🔐 Built with route guards, component-level access control, and local data storage — no backend or database required.

---

## 👥 User Roles

- **Admin** – Full access to all business operations and reports  
- **Employee** – Limited access for daily sales and customer entry

### 🧪 Sample Users

| Username | Password | Role     |
|----------|----------|----------|
| admin    | admin123 | Admin    |
| ravi     | ravi123  | Employee |
| sita     | sita123  | Employee |

---

## 🛠️ Tech Stack

- **Framework**: Angular
- **Routing**: Angular Router with Role-Based Guards
- **State Management**: Angular Services
- **UI**: Bootstrap (or Angular Material)
- **Storage**: In-memory arrays (no backend)

---

## 📌 Features

### ✅ Admin Dashboard

- Business summaries (customers, products, sales)
- Add/Edit/Delete customers and products
- View transactions and reports
- Navigation Menu:
  - Dashboard
  - Customers
  - Products
  - Transactions
  - Reports
  - Logout

### 👷 Employee Dashboard

- Add new transactions (sales)
- Add new customers
- View products and customers (read-only)
- Navigation Menu:
  - Dashboard
  - Make Sale
  - Add Customer
  - View Products
  - Logout

---

## 🧑‍💻 How to Run Locally

**Clone the repository**
   ```bash
   git clone https://github.com/Trisha-jana123/SmartBiz.git
   cd SmartBiz
   npm install
   ng serve
   Open your browser and visit:
👉 http://localhost:4200
   ```
## 📋 Sample Data (Stored in Services)

### 👨‍💼 Customers

| ID | Name           | Mobile      | Location     |
|----|----------------|-------------|--------------|
| 1  | Rajesh Kumar   | 9876543210  | Bhubaneswar  |
| 2  | Sunita Sahu    | 8887654321  | Cuttack      |
| 3  | Akash Das      | 9090909090  | Puri         |
| 4  | Neha Mishra    | 7878787878  | Rourkela     |

### 📦 Products

| ID | Item Name           | Price (₹) | Stock |
|----|----------------------|-----------|--------|
| 1  | Rice Bag 25kg        | 1200      | 10     |
| 2  | Cooking Oil 1L       | 160       | 30     |
| 3  | Toothpaste           | 55        | 50     |
| 4  | Notebook (200 pages) | 35        | 100    |
| 5  | Milk Packet 500ml    | 28        | 60     |

---

## 🔐 Role-Based Access Summary

| Feature                        | Admin ✅ | Employee 👷 |
|-------------------------------|----------|-------------|
| Add/Edit/Delete Customers     | ✅        | Add only    |
| Add/Edit/Delete Products      | ✅        | ❌          |
| Record Transactions/Sales     | ✅        | ✅          |
| View Reports/Charts           | ✅        | ❌          |
| Change Product Prices/Stock   | ✅        | ❌          |

## 📦 Project Structure

```bash
src/
├── app/
│ ├── add-customer/
│ ├── add-product/
│ ├── admin-dashboard/
│ ├── dashboard-summary/
│ ├── edit-customer/
│ ├── edit-product/
│ ├── employee-dashboard/
│ ├── login/
│ ├── make-sale/
│ ├── reports/
│ ├── view-customer/
│ ├── view-products/
│ ├── app.module.ts
│ ├── app-routing.module.ts
│ ├── app.component.ts
│ ├── app.component.html
│ ├── app.component.css
│ ├── app.component.spec.ts
│ ├── auth.guard.ts
│ ├── auth.guard.spec.ts
│ ├── auth.service.ts
│ ├── auth.service.spec.ts
│ ├── role-guard.ts
│ ├── customer.service.ts
│ ├── customer.service.spec.ts
│ ├── product.service.ts
│ ├── product.service.spec.ts
│ ├── transaction.service.ts
│ ├── transaction.service.spec.ts
├── assets/
├── index.html
└── main.ts
```







   
