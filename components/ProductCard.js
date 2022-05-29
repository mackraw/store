import Link from 'next/link';
import propTypes from 'prop-types';
import formatMoney from '../lib/formatMoney';
import CartBtn from './CartBtn';

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <Link href={`/product/${product.id}`}>
          <a>
            <img
              className="product-image"
              src={product.photo.image.publicUrlTransformed}
              alt={product.name}
            />
          </a>
        </Link>
      </div>
      <div className="card-content">
        <div className="product-category">{product.category}</div>
        <div className="product-title">
          <Link href={`/product/${product.id}`}>
            <a className="title-link">{product.name}</a>
          </Link>
        </div>
        <div className="product-description">{product.description}</div>
      </div>
      <div className="bottom-row">
        <div className="product-price">{formatMoney(product.price)}</div>
        <CartBtn className="cardBtn">+ Add to Cart</CartBtn>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: propTypes.object,
};
