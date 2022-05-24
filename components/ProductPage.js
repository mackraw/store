import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import propTypes from 'prop-types';
import formatMoney from '../lib/formatMoney';
import CartBtn from './CartBtn';
import ProductTrack from './ProductTrack';
import QuantityControl from './QuantityControl';
import StarRating from './StarRating';

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
      id
      price
      rating
      category
      photo {
        id
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function ProductPage({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p> error={error}</p>;
  const { Product } = data;
  console.log(Product);
  return (
    <>
      <Head>
        <title>homeGoods | {Product.name}</title>
      </Head>
      <div className="single-product-buy-container container-inner">
        <img
          className="single-product-image"
          src={Product.photo.image.publicUrlTransformed}
          alt={Product.photo.altText}
        />
        <div className="single-product-details">
          <h3 className="single-product-category">{Product.category}</h3>
          <h2 className="single-product-title">{Product.name}</h2>
          <div className="single-product-rating">
            <StarRating rating={Product.rating} />
          </div>
          <p className="single-product-description">{Product.description}</p>
          <h2 className="single-product-price">{formatMoney(Product.price)}</h2>
          <div className="purchase-options">
            <QuantityControl className="single-product-qty" />
            <CartBtn>+ Add to Cart</CartBtn>
          </div>
        </div>
      </div>
      <div className="more-buying-options container-inner">
        <h2 className="section-title">More Buying Options</h2>
        <ProductTrack category={Product.category} />
      </div>
    </>
  );
}

ProductPage.propTypes = {
  id: propTypes.string,
};
