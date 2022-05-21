import propTypes from 'prop-types';
import ProductPage from '../../components/ProductPage';

export default function SingleProductPage({ query }) {
  return <ProductPage id={query.id} />;
}

SingleProductPage.propTypes = {
  query: propTypes.object,
};
