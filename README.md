# 🍽️ Food Delivery Web Application – MERN Stack

A fully functional and responsive food delivery web app built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**. Users can browse meals, add them to a cart, and place orders with real-time cart updates and authentication.

---

## 🔍 Features

- 🧑‍💻 User Registration and Login
- 🛍️ Add to Cart and Remove Items
- 💵 Real-time Cart Total Calculation
- 📦 Place Order Functionality
- 📱 Responsive UI Design for Mobile & Desktop
- 🌐 Deployed using Render (Frontend + Backend)

---

## 💡 Technologies Used

- **Frontend:** React.js, Bootstrap, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **API Testing:** Postman
- **Deployment:** Render

---

## 🚀 Live Demo

🔗 [Click here to visit the live app](https://food-app-frontend-5rcc.onrender.com)

---

## 📁 Folder Structure

/client --> React frontend code
/server --> Express backend code

yaml
Copy
Edit

---

## 🔧 Installation (Local Setup)

1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/FoodDeliveryApp.git
Install dependencies

bash
Copy
Edit
cd server
npm install

cd ../client
npm install
Set up environment variables

In the /server folder, create a .env file and add:

ini
Copy
Edit
MONGO_URI=your_mongodb_connection_string
PORT=5000
Start the backend server

bash
Copy
Edit
cd server
npm start
Start the frontend

bash
Copy
Edit
cd client
npm start
🧪 API Endpoints (Backend)
POST /api/users/register → Register new user

POST /api/users/login → Login user

GET /api/menu → Get list of meals

POST /api/orders → Place an order

👨‍💻 Author
Yash Otwal
📧 yashotwal777@gmail.com
🔗 LinkedIn
🔗 GitHub
