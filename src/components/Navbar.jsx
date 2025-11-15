import { Link } from "react-router";

export default function Navbar({ cartItems = [] }) {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>
        <span style={styles.logoIcon}>MLD-SHP</span>
      </h2>

      <ul style={styles.links}>
        <li style={styles.listItem}>
          <Link to="/" style={styles.link}>
            <span style={styles.linkIcon}>🏠</span>
            <span style={styles.linkText}>Home</span>
          </Link>
        </li>
        <li style={styles.listItem}>
          <Link to="/shopPage" style={styles.link}>
            <span style={styles.linkIcon}>🛍️</span>
            <span style={styles.linkText}>Shop</span>
          </Link>
        </li>
        <li style={styles.listItem}>
          <Link to="/cartPage" style={styles.link}>
            <span style={styles.linkIcon}>🛒</span>
            <span style={styles.linkText}>Cart</span>
          </Link>
        </li>
      </ul>

      <div style={styles.userSection}>
        <div style={styles.user}>
          <div style={styles.avatar}>{cartItems.length}</div>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 32px",
    background: "#000000",
    color: "#ffffff",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    fontFamily: "'Circular', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    borderBottom: "1px solid #282828",
    boxShadow: "0 2px 12px rgba(0, 0, 0, 0.7)",
  },
  logo: {
    margin: 0,
    fontSize: "24px",
    fontWeight: "700",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  logoIcon: {
    color: "#1DB954",
    fontSize: "28px",
  },
  links: {
    display: "flex",
    gap: "24px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  listItem: {
    position: "relative",
  },
  link: {
    color: "#b3b3b3",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "14px",
    padding: "12px 16px",
    borderRadius: "4px",
    transition: "all 0.2s ease",
    display: "flex",
    alignItems: "center",
    gap: "8px",

    // Hover state
    ":hover": {
      color: "#ffffff",
      transform: "scale(1.05)",
    },
  },
  linkIcon: {
    fontSize: "16px",
  },
  linkText: {
    fontSize: "14px",
    fontWeight: "600",
    letterSpacing: "0.5px",
  },
  userSection: {
    display: "flex",
    alignItems: "center",
  },
  user: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "4px 12px",
    borderRadius: "23px",
    background: "#000000",
    border: "1px solid #282828",
    cursor: "pointer",
    transition: "all 0.2s ease",

    ":hover": {
      background: "#282828",
    },
  },
  avatar: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #1DB954, #1ed760)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#000000",
    fontWeight: "700",
    fontSize: "14px",
  },
};
