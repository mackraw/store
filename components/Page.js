import propTypes from 'prop-types';
import Header from './Header';

export default function Page({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

Page.propTypes = {
  children: propTypes.object,
};
