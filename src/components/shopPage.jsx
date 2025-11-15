import { useEffect, useState } from "react";
import ProductCard from "./Product Card";
import { useOutletContext } from "react-router";
export default function ShopPage() {
  const [products, setProducts] = useState(null);
  const { setCartItems } = useOutletContext();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);
  useEffect(() => {
    if (products) {
      const timer = setTimeout(() => setIsLoading(false), 0);
      return () => clearTimeout(timer);
    }
  }, [products]);

  if (isLoading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.spinner}></div>
        <p style={styles.loadingText}>Loading your shopping cart...</p>
      </div>
    );
  }
  //
  if (error)
    return (
      <>
        <div style={styles.loadingContainer}>
          <p></p>
          <p style={styles.loadingText}>A network error was encountered</p>
        </div>
      </>
    );
  //
  function upgradeCartItems(id, q) {
    if (q < 1) return;

    const clickedProduct = products.find((item) => item.id === id);
    if (!clickedProduct) return;

    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === id);

      if (exists) {
        // العنصر موجود → نجمع الكميات فقط
        return prev.map((item) =>
          item.id === id
            ? { ...item, quantity: Number(item.quantity) + Number(q) }
            : item
        );
      }

      // العنصر غير موجود → نضيفه بكمية q
      return [...prev, { ...clickedProduct, quantity: q }];
    });
  }
  return (
    <>
      <div className="container">
        {products.map((product, indx) => {
          return (
            <ProductCard
              product={product}
              key={indx}
              upgradeCartItems={upgradeCartItems}
            />
          );
        })}
      </div>
    </>
  );
}
const styles = {
  loadingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "#000000",
  },
  spinner: {
    width: "50px",
    height: "50px",
    border: "4px solid #282828",
    borderTop: "4px solid #1DB954",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  loadingText: {
    color: "#b3b3b3",
    marginTop: "1rem",
    fontSize: "1.1rem",
  },
};
