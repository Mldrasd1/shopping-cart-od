import HomePage from "./components/homepage";
import ShopPage from "./components/shopPage";
import CartPage from "./components/CartPage";
import App from "./App";

const routes = [
  {
    path: "/", // الأب
    element: <App />, // يحتوي على Navbar + Outlet
    children: [
      {
        index: true, // الصفحة الرئيسية = "/"
        element: <HomePage />,
      },
      {
        path: "shopPage", // = "/shopPage"
        element: <ShopPage />,
      },
      {
        path: "cartPage", // = "/cartPage"
        element: <CartPage />,
      },
    ],
  },
];

export default routes;
