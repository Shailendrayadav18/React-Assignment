# OMS Order Details Screen (React JS)

## Overview

This project is a React JS implementation of the **OMS (Order Management System) - Order Details Screen** based on the provided UI design. The objective was to replicate the given screen as closely as possible using reusable React components, clean CSS, and responsive layout principles.

The screen includes:

* Top Navigation Bar
* Left Navigation Menu
* Order Header Section
* Order Information Sidebar
* Timeline / Process Tracking
* Tabs Navigation
* Order Details Section
* Order Breakdown Section
* Customer Details Section

---

## Tech Stack

### Frontend

* React JS
* JavaScript (ES6+)
* CSS3
* React Icons

### Libraries Used

```bash
react
react-dom
react-icons
axios
react-router-dom
```

---

## Project Structure

```text
src
│
├── components
│   ├── TopNavbar
│   ├── LeftIconMenu
│   ├── Header
│   ├── Sidebar
│   ├── Tabs
│   ├── OrderDetail
│   ├── OrderBreakdown
│   └── CustomerDetail
│
├── pages
│   └── OrderDetailsPage.jsx
│
├── services
│   └── api.js
│
├── App.js
└── index.js
```

---

## APIs Required

To make the screen fully functional, the following APIs are required.

### 1. Order Summary API

```http
GET /api/orders/{orderId}
```

Purpose:

* Order Number
* Material
* Quantity
* Status
* Delivery Date
* Sales Organization
* Plant

---

### 2. Order Timeline API

```http
GET /api/orders/{orderId}/timeline
```

Purpose:

* Production Order
* Sales Order
* Stock Transfer Order
* Date & Time
* Current Status

---

### 3. Order Details API

```http
GET /api/orders/{orderId}/details
```

Purpose:

* Plant
* Sales District
* Distribution Channel
* Division
* Incoterms
* Payment Terms

---

### 4. Order Breakdown API

```http
GET /api/orders/{orderId}/items
```

Purpose:

* Material List
* Requested Quantity
* Scheduled Quantity
* Confirmed Quantity
* UOM
* Status

---

### 5. Customer Details API

```http
GET /api/orders/{orderId}/customer
```

Purpose:

* Sold To
* Ship To
* Billing Address
* Shipping Address
* Customer Reference

---

### 6. User Profile API

```http
GET /api/user/profile
```

Purpose:

* User Name
* Profile Image

---

### 7. Notifications API

```http
GET /api/notifications
```

Purpose:

* Notification Count
* Notification List

---

## Total APIs Required

| API              | Purpose              |
| ---------------- | -------------------- |
| Order Summary    | Header + Sidebar     |
| Timeline         | Process Tracking     |
| Order Details    | Order Detail Section |
| Order Breakdown  | Breakdown Table      |
| Customer Details | Customer Section     |
| User Profile     | Top Navbar           |
| Notifications    | Top Navbar           |

### Total APIs: 7

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd oms-order-details
```

Install dependencies:

```bash
npm install
```

---

## Running Locally

Start the development server:

```bash
npm start
```

The application will run at:

```text
http://localhost:3000
```

---

## Build for Production

```bash
npm run build
```

Production files will be generated inside:

```text
build/
```

---

## Features Implemented

✅ Pixel-matched UI Layout

✅ Reusable React Components

✅ Responsive Design

✅ Sidebar Process Tracking

✅ ERP-style Tables

✅ Modern Navigation Bar

✅ Clean Folder Structure

✅ Ready for API Integration

---

## Future Improvements

* API Integration
* State Management using Redux Toolkit
* Authentication
* Dynamic Tabs
* Dark Mode
* Unit Testing
* Pagination
* Export to PDF/Excel

---

## Author

Shailendra Yadav

React JS Assignment Submission
