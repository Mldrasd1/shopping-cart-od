import { Link } from "react-router";

export default function Home() {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.textSection}>
            <h1 style={styles.heroTitle}>
              <span style={styles.gradientText}>Welcome to MLDRASD Store</span>
              <br />
              <span style={styles.subTitle}>
                Discover Premium Shopping Experience
              </span>
            </h1>

            <p style={styles.heroDescription}>
              Enjoy a unique shopping experience with the best products and
              exclusive offers. Discover the latest trends and special deals at
              competitive prices with guaranteed quality.
            </p>

            <div style={styles.ctaButtons}>
              <Link to="/shopPage" style={styles.primaryButton}>
                <span style={styles.buttonIcon}>🛍️</span>
                Start Shopping Now
              </Link>

              <Link to="/shopPage" style={styles.secondaryButton}>
                <span style={styles.buttonIcon}>🔥</span>
                Browse Exclusive Offers
              </Link>
            </div>

            <div style={styles.stats}>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>+500</span>
                <span style={styles.statLabel}>Premium Products</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>+10K</span>
                <span style={styles.statLabel}>Happy Customers</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>24/7</span>
                <span style={styles.statLabel}>Support</span>
              </div>
            </div>
          </div>

          <div style={styles.imageSection}>
            <div style={styles.imageContainer}>
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Online Shopping"
                style={styles.heroImage}
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200";
                }}
              />
              <div style={styles.imageOverlay}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.features}>
        <div style={styles.featuresContainer}>
          <h2 style={styles.featuresTitle}>Why Choose Our Store?</h2>

          <div style={styles.featuresGrid}>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>🚚</div>
              <h3 style={styles.featureTitle}>Fast Shipping</h3>
              <p style={styles.featureDescription}>
                Quick delivery within 24-48 hours nationwide
              </p>
            </div>

            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>🔒</div>
              <h3 style={styles.featureTitle}>Secure Payment</h3>
              <p style={styles.featureDescription}>
                Encrypted and secure payment systems to protect your information
              </p>
            </div>

            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>⭐</div>
              <h3 style={styles.featureTitle}>Guaranteed Quality</h3>
              <p style={styles.featureDescription}>
                Original products with high quality and 30-day return guarantee
              </p>
            </div>

            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>💬</div>
              <h3 style={styles.featureTitle}>Customer Support</h3>
              <p style={styles.featureDescription}>
                24/7 support team available to help with any inquiry
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section style={styles.categories}>
        <div style={styles.categoriesContainer}>
          <h2 style={styles.categoriesTitle}>Browse Categories</h2>
          <p style={styles.categoriesSubtitle}>
            Discover our premium collection of products
          </p>

          <div style={styles.categoriesGrid}>
            <Link to="/shopPage" style={styles.categoryCard}>
              <div style={styles.categoryIcon}>📱</div>
              <h3 style={styles.categoryName}>Electronics</h3>
              <p style={styles.categoryDescription}>
                Latest devices and technologies
              </p>
            </Link>

            <Link to="/shopPage" style={styles.categoryCard}>
              <div style={styles.categoryIcon}>👕</div>
              <h3 style={styles.categoryName}>Fashion</h3>
              <p style={styles.categoryDescription}>Latest fashion trends</p>
            </Link>

            <Link to="/shopPage" style={styles.categoryCard}>
              <div style={styles.categoryIcon}>💄</div>
              <h3 style={styles.categoryName}>Beauty</h3>
              <p style={styles.categoryDescription}>
                Care and cosmetic products
              </p>
            </Link>

            <Link to="/shopPage" style={styles.categoryCard}>
              <div style={styles.categoryIcon}>🏠</div>
              <h3 style={styles.categoryName}>Home</h3>
              <p style={styles.categoryDescription}>Home decor and furniture</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={styles.finalCta}>
        <div style={styles.ctaContainer}>
          <h2 style={styles.ctaTitle}>Ready to Discover Shopping?</h2>
          <p style={styles.ctaDescription}>
            Join thousands of satisfied customers and start your shopping
            journey today
          </p>
          <Link to="/shopPage" style={styles.ctaButton}>
            <span style={styles.buttonIcon}>✨</span>
            Start Your Journey Now
          </Link>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    background: "#000000",
    minHeight: "100vh",
    fontFamily: "'Circular', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    color: "#ffffff",
  },
  hero: {
    padding: "4rem 2rem",
    background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
    minHeight: "80vh",
    display: "flex",
    alignItems: "center",
  },
  heroContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4rem",
    alignItems: "center",
  },
  textSection: {
    padding: "2rem 0",
  },
  heroTitle: {
    fontSize: "3.5rem",
    fontWeight: "700",
    lineHeight: "1.1",
    margin: "0 0 1.5rem 0",
  },
  gradientText: {
    background: "linear-gradient(45deg, #1DB954, #1ed760)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    display: "block",
  },
  subTitle: {
    color: "#ffffff",
    fontSize: "2rem",
    fontWeight: "300",
  },
  heroDescription: {
    fontSize: "1.2rem",
    color: "#b3b3b3",
    lineHeight: "1.6",
    margin: "0 0 2.5rem 0",
    maxWidth: "500px",
  },
  ctaButtons: {
    display: "flex",
    gap: "1rem",
    marginBottom: "3rem",
    flexWrap: "wrap",
  },
  primaryButton: {
    background: "#1DB954",
    color: "#000000",
    textDecoration: "none",
    padding: "1rem 2rem",
    borderRadius: "8px",
    fontWeight: "700",
    fontSize: "1.1rem",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",

    ":hover": {
      background: "#1ed760",
      transform: "translateY(-2px)",
      boxShadow: "0 10px 25px rgba(29, 185, 84, 0.3)",
    },
  },
  secondaryButton: {
    background: "transparent",
    color: "#ffffff",
    textDecoration: "none",
    padding: "1rem 2rem",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "1.1rem",
    border: "2px solid #1DB954",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",

    ":hover": {
      background: "#1DB954",
      color: "#000000",
      transform: "translateY(-2px)",
    },
  },
  buttonIcon: {
    fontSize: "1.2rem",
  },
  stats: {
    display: "flex",
    gap: "2rem",
    paddingTop: "2rem",
    borderTop: "1px solid #282828",
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  statNumber: {
    color: "#1DB954",
    fontSize: "2rem",
    fontWeight: "700",
    lineHeight: "1",
  },
  statLabel: {
    color: "#b3b3b3",
    fontSize: "0.9rem",
    marginTop: "0.5rem",
  },
  imageSection: {
    position: "relative",
  },
  imageContainer: {
    position: "relative",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
  },
  heroImage: {
    width: "100%",
    height: "500px",
    objectFit: "cover",
    display: "block",
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(45deg, rgba(29, 185, 84, 0.1), rgba(0, 0, 0, 0.3))",
  },
  floatingCard1: {
    position: "absolute",
    top: "20%",
    left: "-20px",
    background: "#181818",
    padding: "1rem",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
    animation: "float 3s ease-in-out infinite",
  },
  floatingCard2: {
    position: "absolute",
    top: "50%",
    right: "-20px",
    background: "#181818",
    padding: "1rem",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
    animation: "float 3s ease-in-out infinite 1s",
  },
  floatingCard3: {
    position: "absolute",
    bottom: "20%",
    left: "30%",
    background: "#181818",
    padding: "1rem",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
    animation: "float 3s ease-in-out infinite 2s",
  },
  floatingIcon: {
    fontSize: "1.5rem",
  },
  floatingText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: "0.9rem",
  },
  features: {
    padding: "5rem 2rem",
    background: "#0a0a0a",
  },
  featuresContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
  },
  featuresTitle: {
    color: "#ffffff",
    fontSize: "2.5rem",
    fontWeight: "700",
    margin: "0 0 1rem 0",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
    marginTop: "3rem",
  },
  featureCard: {
    background: "#181818",
    padding: "2rem",
    borderRadius: "12px",
    transition: "all 0.3s ease",

    ":hover": {
      transform: "translateY(-10px)",
      background: "#1a1a1a",
    },
  },
  featureIcon: {
    fontSize: "3rem",
    marginBottom: "1rem",
  },
  featureTitle: {
    color: "#1DB954",
    fontSize: "1.5rem",
    fontWeight: "600",
    margin: "0 0 1rem 0",
  },
  featureDescription: {
    color: "#b3b3b3",
    lineHeight: "1.6",
    margin: 0,
  },
  categories: {
    padding: "5rem 2rem",
    background: "#000000",
  },
  categoriesContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
  },
  categoriesTitle: {
    color: "#ffffff",
    fontSize: "2.5rem",
    fontWeight: "700",
    margin: "0 0 1rem 0",
  },
  categoriesSubtitle: {
    color: "#b3b3b3",
    fontSize: "1.2rem",
    margin: "0 0 3rem 0",
  },
  categoriesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1.5rem",
  },
  categoryCard: {
    background: "#181818",
    padding: "2rem",
    borderRadius: "12px",
    textDecoration: "none",
    transition: "all 0.3s ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    ":hover": {
      background: "#1DB954",
      transform: "translateY(-5px)",
    },
  },
  categoryIcon: {
    fontSize: "3rem",
    marginBottom: "1rem",
  },
  categoryName: {
    color: "#ffffff",
    fontSize: "1.3rem",
    fontWeight: "600",
    margin: "0 0 0.5rem 0",
  },
  categoryDescription: {
    color: "#b3b3b3",
    margin: 0,
  },
  finalCta: {
    padding: "5rem 2rem",
    background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)",
    textAlign: "center",
  },
  ctaContainer: {
    maxWidth: "600px",
    margin: "0 auto",
  },
  ctaTitle: {
    color: "#ffffff",
    fontSize: "2.5rem",
    fontWeight: "700",
    margin: "0 0 1rem 0",
  },
  ctaDescription: {
    color: "#b3b3b3",
    fontSize: "1.2rem",
    margin: "0 0 2rem 0",
    lineHeight: "1.6",
  },
  ctaButton: {
    background: "#1DB954",
    color: "#000000",
    textDecoration: "none",
    padding: "1.2rem 2.5rem",
    borderRadius: "8px",
    fontWeight: "700",
    fontSize: "1.2rem",
    transition: "all 0.3s ease",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",

    ":hover": {
      background: "#1ed760",
      transform: "scale(1.05)",
      boxShadow: "0 15px 30px rgba(29, 185, 84, 0.4)",
    },
  },
};

// Add animations
const animationStyle = document.createElement("style");
animationStyle.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  @media (max-width: 768px) {
    .hero-content {
      grid-template-columns: 1fr;
      text-align: center;
    }
    
    .hero-title {
      font-size: 2.5rem;
    }
    
    .stats {
      justify-content: center;
    }
    
    .floating-cards {
      display: none;
    }
  }
`;
document.head.appendChild(animationStyle);
