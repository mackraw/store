import Link from 'next/link';
import { HiOutlineTruck } from 'react-icons/hi';
import { RiStore2Line } from 'react-icons/ri';

export default function OrderToday() {
  return (
    <div className="order-today">
      <div className="container-inner">
        <h2 className="section-title">Order today, get it today</h2>
        <div className="options">
          <Link href="#">
            <a className="btn">
              <span className="graphic-wrapper">
                <RiStore2Line className="graphic" />
              </span>
              <span className="text">Order Pickup</span>
            </a>
          </Link>
          <Link href="#">
            <a className="btn">
              <span className="graphic-wrapper">
                <HiOutlineTruck className="graphic" />
              </span>
              <span className="text">Same Day Delivery</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
