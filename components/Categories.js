import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Link from 'next/link';
import Error from './Error';
import Loading from './Loading';

const CATEGORIES_QUERY = gql`
  query CATEGORIES_QUERY {
    allProducts {
      category
    }
  }
`;

export default function Categories() {
  const { data, loading, error } = useQuery(CATEGORIES_QUERY);
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  const categories = new Set(data.allProducts.map((item) => item.category));
  return (
    <div className="categories container-outer">
      <ul className="list">
        {Array.from(categories).map((item, i) => (
          <li key={i} className="item">
            <Link href="#">
              <a className="link">{item}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
