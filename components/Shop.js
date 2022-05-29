import { gql } from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Product from './ProductCard';
import Loading from './Loading';
import Error from './Error';
import Hero from './Hero';

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
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <>
      <Hero
        title="Get ready for some fun!"
        subtitle="Browse our collection of home goods! Add them to your cart, rate them, enjoy them."
        heroStyles="shopping-hero"
        textStyles="shopping-hero-text"
      />
      <div className="products-list container-outer">
        {data.allProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
