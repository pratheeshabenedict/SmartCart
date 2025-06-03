🛒 React Cart App with Theme Toggle
A mini e-commerce frontend application built with React. It features:

🛍️ Product listing

🛒 Cart management using Context API

🌗 Light/Dark theme toggle using ThemeContext

⚡ Performance optimized using React.memo, useCallback, and useMemo

🎨 Styled with Tailwind CSS

🔧 Features
Add/remove products to/from cart

View cart items and total price

Toggle between light and dark themes

Responsive design

Persistent theme using localStorage

📁 Folder Structure
pgsql
Copy
Edit
src/
├── components/
│   ├── ProductCard.jsx
│   ├── CartItem.jsx
│   ├── CartSummary.jsx
│   ├── ThemeToggle.jsx
│   └── Navbar.jsx
├── context/
│   ├── CartContext.js
│   └── ThemeContext.js
├── pages/
│   ├── Home.jsx
│   └── CartPage.jsx
├── constants/
│   └── constant.js
├── App.js
└── index.js
🧩 Tech Stack
React (with functional components and hooks)

React Router DOM for routing

Context API for global state management

Tailwind CSS for styling

LocalStorage for theme persistence

🚀 Getting Started
1. Clone the repo
bash
Copy
Edit
git clone https://github.com/yourusername/react-cart-app.git
cd react-cart-app
2. Install dependencies
bash
Copy
Edit
npm install
3. Start the development server
bash
Copy
Edit
npm run dev
# or
npm start
🌙 Theme Toggle
Uses ThemeContext with useContext and useEffect

Saves theme in localStorage

Dynamically applies light/dark classes to <html>

🧠 State Management
CartContext: Manages cart items, add/remove, clear

ThemeContext: Toggles between light and dark themes

Custom useCart() and useTheme() hooks for clean consumption

📦 Constants
All text, labels, and constants are stored in constants/constant.js for reusability and consistency.
