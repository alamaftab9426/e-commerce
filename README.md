
# React E-commerce Project

This is a **React-based E-commerce project** using **Firebase** as backend.  
It features user authentication, profile management, product management (admin), cart functionality, and Razorpay payment integration (test mode).

---

## Table of Contents
- [Project Overview](#project-overview)
- [Firebase Backend Structure](#firebase-backend-structure)
- [Frontend → Backend Communication](#frontend--backend-communication)
- [How to Run Locally](#how-to-run-locally)
- [Screenshots / Demo](#screenshots--demo)
- [Technologies Used](#technologies-used)

---

## Project Overview
- **User Authentication:** Signup/Login using Firebase Auth  
- **Profile Update:** Update name, address, profile picture  
- **Products:** Admin can add/edit/delete products; images stored in Firebase Storage  
- **Cart & Checkout:** Users can add products to cart and pay via Razorpay (test mode)  
- **Orders:** Stored in Firebase Firestore with status tracking  

---

## Firebase Backend Structure

### Collections:

**1. users**
| Field         | Type   | Description                     |
|---------------|--------|---------------------------------|
| uid           | string | Unique user ID from Firebase    |
| name          | string | User full name                  |
| email         | string | User email                      |
| role          | string | "admin" or "user"               |
| address       | object | Nested address info             |
| profileImage  | string | Firebase Storage image URL      |

**2. products**
| Field       | Type    | Description                     |
|-------------|---------|---------------------------------|
| productId   | string  | Auto-generated ID               |
| name        | string  | Product name                    |
| category    | string  | Product category (Laptop, CCTV, etc.) |
| price       | number  | Product price                   |
| description | string  | Product description             |
| imageURL    | string  | Firebase Storage image URL      |

**3. orders**
| Field       | Type    | Description                     |
|-------------|---------|---------------------------------|
| orderId     | string  | Auto-generated ID               |
| userId      | string  | User who placed the order       |
| products    | array   | List of purchased products      |
| totalAmount | number  | Total order price               |
| status      | string  | pending / paid / delivered      |

---

## Frontend → Backend Communication

**Authentication:**
- Signup: `createUserWithEmailAndPassword()` → Returns `uid`
- Login: `signInWithEmailAndPassword()` → Returns `uid`
- Frontend stores `uid` and uses it to fetch user profile and orders

**Profile Update:**
- Users can update `name`, `address`, and `profileImage`  
- Images uploaded to **Firebase Storage**, URL stored in Firestore

**Products (Admin Panel):**
- Admin can add/edit/delete products  
- Images uploaded to **Firebase Storage**, details saved in Firestore  

**Cart & Orders:**
- Users add products to cart  
- On checkout, order saved in Firestore  
- Payment handled by **Razorpay** (test mode)  
- `status` updated on successful payment

---

## How to Run Locally

1. **Clone the repo**
```bash
git clone https://github.com/alamaftab9426/e-commerce.git
cd e-commerce
