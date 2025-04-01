export default function NikeFooter() {
  return (
    <footer className="nike-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4 className="footer-heading">FEATURED</h4>
          <ul className="footer-links">
            <li>
              <a href="#">New Releases</a>
            </li>
            <li>
              <a href="#">Men's Shoes</a>
            </li>
            <li>
              <a href="#">Women's Shoes</a>
            </li>
            <li>
              <a href="#">Kids' Shoes</a>
            </li>
            <li>
              <a href="#">Clothing</a>
            </li>
            <li>
              <a href="#">Accessories</a>
            </li>
            <li>
              <a href="#">Sale</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">SHOES</h4>
          <ul className="footer-links">
            <li>
              <a href="#">Running</a>
            </li>
            <li>
              <a href="#">Basketball</a>
            </li>
            <li>
              <a href="#">Football</a>
            </li>
            <li>
              <a href="#">Gym & Training</a>
            </li>
            <li>
              <a href="#">Lifestyle</a>
            </li>
            <li>
              <a href="#">Soccer</a>
            </li>
            <li>
              <a href="#">Tennis</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">CLOTHING</h4>
          <ul className="footer-links">
            <li>
              <a href="#">All Clothing</a>
            </li>
            <li>
              <a href="#">Tops & T-Shirts</a>
            </li>
            <li>
              <a href="#">Hoodies & Sweatshirts</a>
            </li>
            <li>
              <a href="#">Jackets & Vests</a>
            </li>
            <li>
              <a href="#">Pants & Tights</a>
            </li>
            <li>
              <a href="#">Shorts</a>
            </li>
            <li>
              <a href="#">Compression & Base Layer</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">HELP</h4>
          <ul className="footer-links">
            <li>
              <a href="#">Order Status</a>
            </li>
            <li>
              <a href="#">Shipping & Delivery</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Payment Options</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Gift Cards</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">ABOUT NIKE</h4>
          <ul className="footer-links">
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Investors</a>
            </li>
            <li>
              <a href="#">Sustainability</a>
            </li>
            <li>
              <a href="#">Purpose</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="social-container">
        <div className="social-icons">
          <a
            href="https://twitter.com/Nike"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Nike Twitter"
          >
            <div className="icon twitter"></div>
          </a>
          <a
            href="https://www.facebook.com/nike"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Nike Facebook"
          >
            <div className="icon facebook"></div>
          </a>
          <a
            href="https://www.youtube.com/user/nike"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Nike YouTube"
          >
            <div className="icon youtube"></div>
          </a>
          <a
            href="https://www.instagram.com/nike"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Nike Instagram"
          >
            <div className="icon instagram"></div>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-info">
          <div className="location">
            <a href="#">Indonesia</a>
            <span>© 2023 Nike, Inc. All Rights Reserved</span>
          </div>
          <div className="legal-links">
            <a href="#">Guides</a>
            <a href="#">Terms of Sale</a>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
