import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <span className={styles.logo}>
            <span className={styles.fire}>🔥</span> Agni<span className="text-gradient">x</span>
          </span>
          <p className={styles.tagline}>
            Digital experiences that ignite growth.
          </p>
        </div>

        {/* Quick links */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Navigate</h4>
          <ul className={styles.links}>
            <li><a href="#services">Services</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#addons">Add-ons</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Services</h4>
          <ul className={styles.links}>
            <li><a href="#services">Website Development</a></li>
            <li><a href="#services">Branding</a></li>
            <li><a href="#services">Automation</a></li>
            <li><a href="#services">E-Commerce</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Reach Us</h4>
          <ul className={styles.links}>
            <li>📍 Vaniyambadi, Tamil Nadu</li>
            <li>✉️ hello@agnix.in</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p className={styles.copy}>
            © {year} Agnix Digital Experience. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
