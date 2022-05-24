import Link from 'next/link';
import { useState } from 'react';
import {
  RiShoppingCartLine,
  RiSearchLine,
  RiMenu2Line,
  RiCloseFill,
} from 'react-icons/ri';

export default function Header() {
  const [isMobileNavHidden, setIsMobileNavHidden] = useState(true);

  const toggleMobileNav = () => {
    if (window.innerWidth < 767) {
      setIsMobileNavHidden(!isMobileNavHidden);
      const nav = document.querySelector('.nav');
      nav.classList.toggle('is-showing');
      document.querySelector('.overlay').classList.toggle('is-showing');
      document.body.classList.toggle('disable-scroll');
    }
  };

  return (
    <header className="site-header container-inner">
      <span className="burger-btn">
        <RiMenu2Line
          className={isMobileNavHidden ? null : 'is-hidden'}
          onClick={toggleMobileNav}
        />
        <RiCloseFill
          className={isMobileNavHidden ? 'is-hidden' : null}
          onClick={toggleMobileNav}
        />
      </span>
      <Link href="/">
        <a className="logo">homeGoods</a>
      </Link>
      <div className="overlay" />
      <nav className="nav">
        <ul>
          <li className="nav-item">
            <Link href="/">
              <a
                className="nav-link"
                onClick={toggleMobileNav}
                role="link"
                tabIndex={0}
              >
                Home
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/shop">
              <a
                className="nav-link"
                onClick={toggleMobileNav}
                role="link"
                tabIndex={0}
              >
                Shop
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/login">
              <a
                className="nav-link"
                onClick={toggleMobileNav}
                role="link"
                tabIndex={0}
              >
                Log In
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <span className="cart">
          <RiShoppingCartLine />
        </span>
        <span className="nav-search">
          <RiSearchLine />
        </span>
      </div>
    </header>
  );
}
