import formatMoney from '../lib/formatMoney';

export default function ProductCard({ product }) {
  return (
    <div className="product">
      <img className="product-image" src={product?.photo?.image?.publicUrlTransformed} alt={product.name}/>
      <div className="product-title">{product.name}</div>
      <div className="product-description">{product.description}</div>
      <div className="product-price">{formatMoney(product.price)}</div>
    </div>
  );
}
