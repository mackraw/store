import Link from 'next/link';
import { useState } from 'react';
import { RiShoppingCartLine, RiSearchLine, RiMenu2Line, RiCloseFill } from 'react-icons/ri';

export default function Header() {
  const [isMobileNavHidden, setIsMobileNavHidden] = useState(true);

  const toggleMobileNav = () => {
    setIsMobileNavHidden(!isMobileNavHidden);
    const nav = document.querySelector('.nav');
    nav.classList.toggle('is-showing');
    document.querySelector('.overlay').classList.toggle('is-showing');
  };

  return (
    <header className='site-header container-inner'>
      <span className='burger-btn'>
        <RiMenu2Line className={isMobileNavHidden ? null : 'is-hidden'} onClick={toggleMobileNav} />
        <RiCloseFill className={isMobileNavHidden ? 'is-hidden' : null} onClick={toggleMobileNav} />
      </span>
      <Link href='/'>
        <a className='logo'>homeGoods</a>
      </Link>
      <div className="overlay"></div>
      <nav className='nav'>
        <ul>
          <li className='nav-item'>
            <Link href='/shop'>
              <a className='nav-link'>Shop</a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/login'>
              <a className='nav-link'>Log In</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <span className='cart'>
          <RiShoppingCartLine />
        </span>
        <span className='nav-search'>
          <RiSearchLine />
        </span>
      </div>
    </header>
  );
}
