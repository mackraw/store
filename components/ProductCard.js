import Link from 'next/link';
import formatMoney from '../lib/formatMoney';
import CartBtn from './CartBtn';

export default function ProductCard({ product }) {
  return (
    <div className="product">
      <Link href={`/product/${product.id}`}>
        <a className="image-link">
          <img
            className="product-image"
            src={product?.photo?.image?.publicUrlTransformed}
            alt={product.name}
          />
        </a>
      </Link>
      <div className="product-category">{product.category}</div>
      <div className="product-title">
        <Link href={`/product/${product.id}`}>
          <a className="title-link">{product.name}</a>
        </Link>
      </div>
      <div className="product-description">{product.description}</div>
      <div className="bottom-row">
        <div className="product-price">{formatMoney(product.price)}</div>
        {/* <button type="button" className='product-btn'>+ Add to Cart</button> */}
        <CartBtn className="cardBtn">+ Add to Cart</CartBtn>
      </div>
    </div>
  );
}
