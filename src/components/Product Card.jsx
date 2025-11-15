import { useState } from "react";
//import { useOutletContext } from "react-router";

export default function ProductCard({ product, upgradeCartItems }) {
  const [isHovered, setIsHovered] = useState(false);
  const [q, setq] = useState(0);

  // const { cartItems, setCartItems } = useOutletContext();
  // Safe destructuring with default values
  const {
    id,
    title = "Product Name",
    description = "Product description not available",
    price = 0,
    originalPrice = null,
    images = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    rating = 0,
  } = product || {};

  return (
    <div
      className="p-c"
      style={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.imageContainer}>
        <img
          src={images[0]}
          alt={title}
          style={{
            ...styles.image,
            ...(isHovered ? styles.imageHover : {}),
          }}
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400";
          }}
        />
        <button
          onClick={() => {
            upgradeCartItems(id);
            setq(0);
          }}
          style={{
            ...styles.playButton,
            ...(isHovered ? styles.playButtonVisible : {}),
          }}
        >
          <span style={styles.playIcon}>🛒</span>
        </button>
      </div>

      <div style={styles.content}>
        <h3 style={styles.productName}>{title}</h3>
        <p style={styles.description}>{description}</p>

        <div style={styles.footer}>
          <div style={styles.priceSection}>
            <span style={styles.price}>${price}</span>
            {originalPrice && (
              <span style={styles.originalPrice}>${originalPrice}</span>
            )}
          </div>

          <div style={styles.rating}>
            <span style={styles.stars}>
              {"★".repeat(Math.floor(rating))}
              {"☆".repeat(5 - Math.floor(rating))}
            </span>
            <span style={styles.ratingCount}>({rating})</span>
          </div>
        </div>
        <input
          style={{
            ...styles.addButton,
            ...(isHovered ? styles.addButtonHover : {}),
            marginBottom: "5px",
          }}
          type="number"
          placeholder="quantity"
          value={q}
          onChange={(e) => {
            e.target.value < 0 ? 0 : setq(e.target.value);
          }}
        />
        <button
          style={{
            ...styles.addButton,
            ...(isHovered ? styles.addButtonHover : {}),
          }}
          onClick={() => {
            upgradeCartItems(id, q);
            setq(0);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "#181818",
    borderRadius: "8px",
    padding: "16px",
    transition: "all 0.3s ease",
    cursor: "pointer",
    position: "relative",
    fontFamily: "'Circular', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    minHeight: "380px",
    display: "flex",
    flexDirection: "column",

    // Hover effect for entire card
    ":hover": {
      background: "#282828",
      transform: "translateY(-8px)",
    },
  },
  imageContainer: {
    position: "relative",
    marginBottom: "16px",
    borderRadius: "4px",
    overflow: "hidden",
    flexShrink: 0,
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "4px",
    transition: "all 0.3s ease",
    backgroundColor: "#282828", // Fallback background
  },
  imageHover: {
    transform: "scale(1.05)",
  },
  playButton: {
    position: "absolute",
    bottom: "8px",
    right: "8px",
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    background: "#1DB954",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    opacity: 0,
    transform: "translateY(8px)",
    transition: "all 0.3s ease",

    // Hover effect for play button itself
    ":hover": {
      transform: "scale(1.1)",
      background: "#1ed760",
    },
  },
  playButtonVisible: {
    opacity: 1,
    transform: "translateY(0)",
  },
  playIcon: {
    fontSize: "20px",
    marginLeft: "2px",
  },
  content: {
    color: "#ffffff",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  productName: {
    fontSize: "16px",
    fontWeight: "700",
    margin: "0 0 8px 0",
    color: "#ffffff",
    lineHeight: "1.3",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  description: {
    fontSize: "14px",
    color: "#b3b3b3",
    margin: "0 0 16px 0",
    lineHeight: "1.4",
    flex: 1,
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
    flexShrink: 0,
  },
  priceSection: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  price: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#1DB954",
  },
  originalPrice: {
    fontSize: "14px",
    color: "#b3b3b3",
    textDecoration: "line-through",
  },
  rating: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
  stars: {
    color: "#1DB954",
    fontSize: "14px",
  },
  ratingCount: {
    fontSize: "12px",
    color: "#b3b3b3",
  },
  addButton: {
    width: "100%",
    padding: "12px 16px",
    background: "transparent",
    border: "1px solid #535353",
    color: "#b3b3b3",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s ease",
    flexShrink: 0,

    // Hover state
    ":hover": {
      borderColor: "#1DB954",
      color: "#1DB954",
      transform: "scale(1.02)",
    },
  },
  addButtonHover: {
    borderColor: "#1DB954",
    color: "#1DB954",
  },
};
