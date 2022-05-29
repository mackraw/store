import { useEffect } from 'react';
import Link from 'next/link';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from 'react-icons/fa';

export default function Footer() {
  useEffect(() => {
    const footerHeight = document.querySelector('.footer').offsetHeight;
    document.querySelector('.main').style.marginBottom = `${footerHeight}px`;
  }, []);
  return (
    <div className="footer container-inner">
      <div className="footer-row">
        <div className="footer-wide-column">
          <div className="newsletter">
            <h3 className="newsletter-title">Stay Informed!</h3>
            <div className="input-item">
              <label htmlFor="email">Your email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="input-item">
              <input type="checkbox" name="terms" id="terms" />
              <label htmlFor="terms" className="agree-terms">
                I agree with privacy policy and terms of use.
              </label>
            </div>
          </div>
          <div className="social">
            <h3 className="list-title">Follow Us</h3>
            <div className="social-icons">
              <span className="social-icon">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagramSquare />
                </a>
              </span>
              <span className="social-icon">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <FaFacebookSquare />
                </a>
              </span>
              <span className="social-icon">
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <FaTwitterSquare />
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="footer-narrow-column">
          <div className="site-map">
            <h3 className="list-title">Products</h3>
            <ul className="footer-list">
              <li className="footer-list-item">
                <Link href="#">
                  <a className="footer-list-link">Ceramics</a>
                </Link>
              </li>
              <li className="footer-list-item">
                <Link href="#">
                  <a className="footer-list-link">Chairs</a>
                </Link>
              </li>
              <li className="footer-list-item">
                <Link href="#">
                  <a className="footer-list-link">Clocks</a>
                </Link>
              </li>
              <li className="footer-list-item">
                <Link href="#">
                  <a className="footer-list-link">Couches</a>
                </Link>
              </li>
              <li className="footer-list-item">
                <Link href="#">
                  <a className="footer-list-link">Knives</a>
                </Link>
              </li>
              <li className="footer-list-item">
                <Link href="#">
                  <a className="footer-list-link">Plants</a>
                </Link>
              </li>
              <li className="footer-list-item">
                <Link href="#">
                  <a className="footer-list-link">Lighting</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="site-map">
            <h3 className="list-title">Contact</h3>
            <ul className="footer-list">
              <li className="footer-list-item">
                <Link href="mailto:email@address.com">
                  <a className="footer-list-link">email@address.com</a>
                </Link>
              </li>
              <li className="footer-list-item">
                <Link href="tel:+11231234567">
                  <a className="footer-list-link">+1 (123) 123-4567</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-narrow-column">
          <div className="site-map">
            <h3 className="list-title">Company</h3>
            <ul className="footer-list">
              <li className="footer-list-item">
                <Link href="#">
                  <a className="footer-list-link">Who We Are</a>
                </Link>
              </li>
              <li className="footer-list-item">
                <Link href="#">
                  <a className="footer-list-link">Our Stores</a>
                </Link>
              </li>
              <li className="footer-list-item">
                <Link href="#">
                  <a className="footer-list-link">What We Value</a>
                </Link>
              </li>
              <li className="footer-list-item">
                <Link href="#">
                  <a className="footer-list-link">Our Locations</a>
                </Link>
              </li>
              <li className="footer-list-item">
                <Link href="#">
                  <a className="footer-list-link">Concept Rooms</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="site-map">
            <h3 className="list-title">Help</h3>
            <ul className="footer-list">
              <li className="footer-list-item">
                <Link href="#">
                  <a className="footer-list-link">Terms &amp; Conditions</a>
                </Link>
              </li>
              <li className="footer-list-item">
                <Link href="#">
                  <a className="footer-list-link">Privacy Policy</a>
                </Link>
              </li>
              <li className="footer-list-item">
                <Link href="#">
                  <a className="footer-list-link">Cookies</a>
                </Link>
              </li>
              <li className="footer-list-item">
                <Link href="#">
                  <a className="footer-list-link">Payment Methods</a>
                </Link>
              </li>
              <li className="footer-list-item">
                <Link href="#">
                  <a className="footer-list-link">Shipping &amp; Returns</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-row brand">homeGoods</div>
      <div className="footer-row copy">
        Copyright &copy; {new Date().getFullYear()} Mac Krawczyk
      </div>
    </div>
  );
}
