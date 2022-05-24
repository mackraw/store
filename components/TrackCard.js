import Link from 'next/link';
import formatMoney from '../lib/formatMoney';
import CartBtn from './CartBtn';

export default function TrackCard({ product }) {
  return (
    <div className="product-card track-card">
      <Link href={`/product/${product.id}`}>
        <a>
          <img
            className="product-image track-card-image"
            src={product?.photo?.image?.publicUrlTransformed}
            alt={product.name}
          />
        </a>
      </Link>
      <div className="product-title track-card-title">
        <Link href={`/product/${product.id}`}>
          <a className="title-link track-card-title-link">{product.name}</a>
        </Link>
      </div>
      <div className="product-description track-card-description">
        {product.description}
      </div>
      <div className="track-card-price">{formatMoney(product.price)}</div>
      <CartBtn className="trackCardBtn">+ Add to Cart</CartBtn>
    </div>
  );
}
