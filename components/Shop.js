import { gql } from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Product from './ProductCard';

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
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
      <div>Shopping time hero</div>
      <div className="products-list">
        {data.allProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
