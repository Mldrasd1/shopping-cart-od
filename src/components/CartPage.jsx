import { Link } from "react-router";
import { useOutletContext } from "react-router";
export default function Cart() {
  const { cartItems, setCartItems } = useOutletContext();

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  //

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) =>
        Number(total) + Number(item.price) * Number(item.quantity),
      0
    );
  };

  /* const calculateDiscount = () => {
    return cartItems.reduce((total, item) => {
      if (item.originalPrice) {
        return total + (item.originalPrice - item.price) * item.quantity;
      }
      return total;
    }, 0);
  };*/

  const calculateTotal = () => {
    return calculateSubtotal();
  };

  const getTotalItems = () => {
    return cartItems.reduce(
      (total, item) => Number(total) + Number(item.quantity),
      0
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Shopping Cart</h1>
        <p style={styles.subtitle}> Pay and enjoy the shopping experience </p>
      </div>

      {cartItems.length === 0 ? (
        <div style={styles.emptyCart}>
          <div style={styles.emptyIcon}>🛒</div>
          <h2 style={styles.emptyTitle}>The shopping cart is empty</h2>
          <p style={styles.emptyText}>
            You have not added any products to your shopping cart yet{" "}
          </p>
          <Link to="/shopPage" style={styles.shopButton}>
            Start Shooping
          </Link>
        </div>
      ) : (
        <div style={styles.cartContent}>
          <div style={styles.cartItems}>
            <div style={styles.cartHeader}>
              <span style={styles.headerProduct}>Product</span>
              <span style={styles.headerPrice}>Price</span>
              <span style={styles.headerQuantity}>Quantity</span>
              <span style={styles.headerTotal}>Totale</span>
              <span style={styles.headerAction}>Delete</span>
            </div>

            {cartItems.map((item) => (
              <div key={item.id} style={styles.cartItem}>
                <div style={styles.productInfo}>
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    style={styles.productImage}
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400";
                    }}
                  />
                  <div style={styles.productDetails}>
                    <h3 style={styles.productName}>{item.name}</h3>
                    <span style={styles.productCategory}>{item.category}</span>
                  </div>
                </div>

                <div style={styles.price}>
                  <span style={styles.currentPrice}>
                    ${item.price.toFixed(2)}
                  </span>
                  {item.originalPrice && (
                    <span style={styles.originalPrice}>
                      ${item.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                <div style={styles.quantity}>
                  <button
                    style={styles.quantityButton}
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span style={styles.quantityNumber}>{item.quantity}</span>
                  <button
                    style={styles.quantityButton}
                    onClick={() =>
                      updateQuantity(item.id, Number(item.quantity) + 1)
                    }
                  >
                    +
                  </button>
                </div>

                <div style={styles.total}>
                  <span style={styles.itemTotal}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>

                <div style={styles.action}>
                  <button
                    style={styles.removeButton}
                    onClick={() => removeItem(item.id)}
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.cartSummary}>
            <div style={styles.summaryCard}>
              <h3 style={styles.summaryTitle}> Summary</h3>

              <div style={styles.summaryRow}>
                <span>Products ({getTotalItems()}) </span>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>

              <div style={styles.summaryRow}>
                <span>Shipping</span>
                <span style={styles.freeShipping}>Free</span>
              </div>

              <div style={styles.divider}></div>

              <div style={styles.totalRow}>
                <span style={styles.totalLabel}> Total</span>
                <span style={styles.totalAmount}>
                  ${calculateTotal().toFixed(2)}
                </span>
              </div>

              <button style={styles.checkoutButton}>
                <span style={styles.checkoutIcon}>💳</span>
                Complet Purchase{" "}
              </button>

              <Link to="/shopPage" style={styles.continueShopping}>
                ← Continue shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    background: "#000000",
    minHeight: "100vh",
    padding: "2rem",
    fontFamily: "'Circular', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    color: "#ffffff",
  },
  header: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  title: {
    color: "#1DB954",
    fontSize: "2.5rem",
    margin: "0 0 0.5rem 0",
    fontWeight: "700",
  },
  subtitle: {
    color: "#b3b3b3",
    fontSize: "1.1rem",
    margin: 0,
  },
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
  emptyCart: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "60vh",
    textAlign: "center",
  },
  emptyIcon: {
    fontSize: "4rem",
    marginBottom: "1rem",
    opacity: 0.7,
  },
  emptyTitle: {
    color: "#ffffff",
    fontSize: "1.5rem",
    margin: "0 0 1rem 0",
  },
  emptyText: {
    color: "#b3b3b3",
    fontSize: "1rem",
    margin: "0 0 2rem 0",
  },
  shopButton: {
    background: "#1DB954",
    color: "#000000",
    textDecoration: "none",
    padding: "12px 24px",
    borderRadius: "4px",
    fontWeight: "600",
    fontSize: "1rem",
    transition: "all 0.2s ease",

    ":hover": {
      background: "#1ed760",
      transform: "scale(1.05)",
    },
  },
  cartContent: {
    display: "grid",
    gridTemplateColumns: "1fr 400px",
    gap: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
    alignItems: "start",
  },
  cartItems: {
    background: "#181818",
    borderRadius: "8px",
    overflow: "hidden",
  },
  cartHeader: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr 0.5fr",
    gap: "1rem",
    padding: "1rem 1.5rem",
    background: "#282828",
    color: "#b3b3b3",
    fontSize: "0.9rem",
    fontWeight: "600",
    borderBottom: "1px solid #333",
  },
  cartItem: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr 0.5fr",
    gap: "1rem",
    padding: "1.5rem",
    alignItems: "center",
    borderBottom: "1px solid #282828",
    transition: "background 0.2s ease",

    ":hover": {
      background: "#1a1a1a",
    },
  },
  productInfo: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  productImage: {
    width: "60px",
    height: "60px",
    borderRadius: "4px",
    objectFit: "cover",
  },
  productDetails: {
    display: "flex",
    flexDirection: "column",
  },
  productName: {
    color: "#ffffff",
    fontSize: "1rem",
    margin: "0 0 0.25rem 0",
    fontWeight: "600",
  },
  productCategory: {
    color: "#1DB954",
    fontSize: "0.8rem",
    textTransform: "capitalize",
  },
  price: {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
  },
  currentPrice: {
    color: "#1DB954",
    fontWeight: "600",
    fontSize: "1rem",
  },
  originalPrice: {
    color: "#b3b3b3",
    fontSize: "0.8rem",
    textDecoration: "line-through",
  },
  quantity: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  quantityButton: {
    background: "transparent",
    border: "1px solid #535353",
    color: "#b3b3b3",
    width: "32px",
    height: "32px",
    borderRadius: "4px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.2s ease",
    fontSize: "1rem",

    ":hover": {
      borderColor: "#1DB954",
      color: "#1DB954",
    },
  },
  quantityNumber: {
    color: "#ffffff",
    fontWeight: "600",
    minWidth: "30px",
    textAlign: "center",
  },
  total: {
    textAlign: "center",
  },
  itemTotal: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: "1rem",
  },
  action: {
    textAlign: "center",
  },
  removeButton: {
    background: "transparent",
    border: "none",
    color: "#b3b3b3",
    cursor: "pointer",
    fontSize: "1.1rem",
    padding: "0.5rem",
    borderRadius: "4px",
    transition: "all 0.2s ease",

    ":hover": {
      color: "#ff4444",
      background: "rgba(255, 68, 68, 0.1)",
    },
  },
  cartSummary: {
    position: "sticky",
    top: "2rem",
  },
  summaryCard: {
    background: "#181818",
    borderRadius: "8px",
    padding: "1.5rem",
    border: "1px solid #282828",
  },
  summaryTitle: {
    color: "#ffffff",
    fontSize: "1.25rem",
    margin: "0 0 1.5rem 0",
    fontWeight: "700",
    textAlign: "center",
  },
  summaryRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
    color: "#b3b3b3",
    fontSize: "0.9rem",
  },
  discountText: {
    color: "#1DB954",
    fontWeight: "600",
  },
  freeShipping: {
    color: "#1DB954",
    fontWeight: "600",
  },
  divider: {
    height: "1px",
    background: "#282828",
    margin: "1rem 0",
  },
  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.5rem",
  },
  totalLabel: {
    color: "#ffffff",
    fontSize: "1.1rem",
    fontWeight: "600",
  },
  totalAmount: {
    color: "#1DB954",
    fontSize: "1.5rem",
    fontWeight: "700",
  },
  checkoutButton: {
    width: "100%",
    background: "#1DB954",
    color: "#000000",
    border: "none",
    padding: "1rem",
    borderRadius: "4px",
    fontSize: "1rem",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.2s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    marginBottom: "1rem",

    ":hover": {
      background: "#1ed760",
      transform: "scale(1.02)",
    },
  },
  checkoutIcon: {
    fontSize: "1.2rem",
  },
  continueShopping: {
    color: "#b3b3b3",
    textDecoration: "none",
    textAlign: "center",
    display: "block",
    fontSize: "0.9rem",
    transition: "color 0.2s ease",

    ":hover": {
      color: "#1DB954",
    },
  },
};
