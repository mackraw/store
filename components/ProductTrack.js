import { gql } from 'graphql-tag';
import { useQuery } from '@apollo/client';
import propTypes from 'prop-types';
import TrackCard from './TrackCard';

const SIMILAR_PRODUCTS_QUERY = gql`
  query SIMILAR_PRODUCTS_QUERY($category: String!) {
    allProducts(where: { category: $category }) {
      name
      price
      description
      id
      price
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

export default function ProductTrack({ category }) {
  const { data, error, loading } = useQuery(SIMILAR_PRODUCTS_QUERY, {
    variables: {
      category,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="product-track">
      {data.allProducts.map((product) => (
        <TrackCard key={product.id} product={product} />
      ))}
    </div>
  );
}

ProductTrack.propTypes = {
  category: propTypes.string,
};
