# Campers Shop API

This is the backend API for the Campers Shop e-commerce website. The API is built using TypeScript, Express, and Mongoose, providing endpoints for managing products, and other essential e-commerce features.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)


## Features
  - Category Management: Manage product categories.
  - Product Management: CRUD operations for products.
  - Order Management: Create, read, and manage customer orders.
  - Pagination & Filtering: Efficient product pagination and filtering options.
  - Error Handling: Global error handling system.
  - Validation: Request validation using custom middlewares.

## Technologies

- **TypeScript**: Ensures type safety and better development experience.
- **Express**: A fast, unopinionated, minimalist web framework for Node.js.
- **Mongoose**: MongoDB object modeling for Node.js, providing a straightforward, schema-based solution to model application data.
- **MongoDB**: A NoSQL database used to store movies, users, bookings, and more.
- **Zod**: Ensure validation.
- **Cloudinary**: For upload images.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB

### Installation

1. **Clone the repository:**

   ```bash
   gh repo clone shouravpaul01/campers-shop-api
   ```
2. **Navigate to the project directory:**

   ```bash
   cd campers-shop-api
   ```
3. **Install dependencies:**

   ```bash
   npm install
   ```
4. **Set up environment variables:**

   ```bash
  PORT=3000
  DATABASE_URL=***
  ClOUD_NAME=***
  API_KEY= ***
  API_SECRET= ***
   ```
5. **Run the project:**

   ```bash
   npm run dev
   ```
## Usage
After running the API, it will be available at http://localhost:3000. You can use tools like Postman.

## API Endpoints

**Category**

- **POST** `/api/v1/categories/create-category`  
  Add a new category

- **GET** `/api/v1/categories`  
  Get all categories

- **GET** `/api/v1/categories/single-category/:categoryId`  
  Get singel category

- **PATCH** `/api/v1/categories/:categoryId`  
  Update Category.  

- **PATCH** `/api/v1/categories/update-status/:categoryId`  
  Update status/

- **GET** `/api/v1/categories/active-categories`  
  Get all active categories.

**Product**

- **POST** `/api/v1/products/create-product`  
  Add a new product. 

- **GET** `/api/v1/products`  
   Get a list of all products.

- **GET** `/api/v1/products/single-product/:productId`  
  Get singel product.

- **PATCH** `/api/v1/products/:productId`  
  Update product.

- **PATCH** `/api/v1/products/update-status/:productId`  
  Update status.



