import Link from 'next/link';
import { RiShoppingCartLine, RiSearchLine, RiMenu2Line, RiCloseFill } from 'react-icons/ri';

export default function Header() {
  return (
    <header className='site-header container-inner'>
      <span className='burger-btn'>
        <RiMenu2Line />
        <RiCloseFill className='is-hidden' />
      </span>
      <Link href='/'>
        <a className='logo'>homeGoods</a>
      </Link>
      <nav className='nav is-hidden'>
        <ul>
          <li className='nav-item'>
            <Link href='/shop'>
              <a className='nav-link'>Shop </a>
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
