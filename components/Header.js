import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="burger-btn-wrapper">
        <div className="burger-btn"></div>
      </div>
      <Link href='/'><a className='logo'>homeGoods</a></Link>
      <nav className="nav">
        <ul>
          <li className='nav-item'>
            <Link href='/shop'><a className='nav-link'>Shop </a></Link>
          </li>
          <li className='nav-item'>
            <Link href='/login'><a className='nav-link'>Log In</a></Link>
          </li>
        </ul>
      </nav>
      <button type='button' className='cart'>Cart</button>
      <div className='nav-search'>Search</div>
    </header>
  );
}
