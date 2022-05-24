import Link from 'next/link';
import formatMoney from '../lib/formatMoney';
import CartBtn from './CartBtn';

export default function TrackCard({ product }) {
  return (
    <div className="track-card">
      <Link href={`/product/${product.id}`}>
        <a className="track-card-image-link">
          <img
            className="track-card-image"
            src={product?.photo?.image?.publicUrlTransformed}
            alt={product.name}
          />
        </a>
      </Link>
      <div className="track-card-title">
        <Link href={`/product/${product.id}`}>
          <a className="track-card-title-link">{product.name}</a>
        </Link>
      </div>
      <div className="track-card-description">{product.description}</div>
      <div className="track-card-bottom-row">
        <div className="track-card-price">{formatMoney(product.price)}</div>
        {/* <button type="button" className='product-btn'>+ Add to Cart</button> */}
        <CartBtn className="trackCardBtn">+ Add to Cart</CartBtn>
      </div>
    </div>
  );
}
