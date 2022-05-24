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

function isHorizontallyScrollable(el) {
  const x1 = el.scrollLeft;
  el.scrollLeft += 1;
  const x2 = el.scrollLeft;
  el.scrollLeft -= 1;
  const x3 = el.scrollLeft;
  el.scrollLeft = x1;
  return x1 !== x2 || x2 !== x3;
}

export default function ProductTrack({ category, ownerId }) {
  const { data, error, loading } = useQuery(SIMILAR_PRODUCTS_QUERY, {
    variables: {
      category,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="product-track">
      {data.allProducts
        .filter((item) => item.id !== ownerId)
        .slice(0, 3)
        .map((product) => (
          <TrackCard key={product.id} product={product} />
        ))}
    </div>
  );
}

ProductTrack.propTypes = {
  category: propTypes.string,
  ownerId: propTypes.string,
};
