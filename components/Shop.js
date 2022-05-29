import { gql } from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Product from './ProductCard';
import Message from './Message';

const ALL_PRODUCTS_QUERY = gql`
  query {
    allProducts {
      id
      name
      price
      description
      category
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function Shop() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  if (loading) return <Message messageType="loading" />;
  if (error)
    return <Message messageType="error">Error: {error.message}</Message>;
  return (
    <>
      <div className="shopping-hero">
        <div className="shopping-hero-text container-inner">
          <h2 className="shopping-hero-title">Get ready for some fun!</h2>
          <p className="shopping-hero-subtitle">
            Browse our collection of home goods! Add them to your cart, rate
            them, enjoy them.
          </p>
        </div>
      </div>
      <div className="products-list container-outer">
        {data.allProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
