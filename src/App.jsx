import Navbar from "./components/Navbar";
import { Outlet } from "react-router";
import "./App.css";
import { useState } from "react";
export default function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Navbar cartItems={cartItems} />
      <Outlet context={{ cartItems, setCartItems }} />
    </>
  );
}

// Add spinner animation
const spinnerStyle = document.createElement("style");
spinnerStyle.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(spinnerStyle);
