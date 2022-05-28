import propTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

export default function Page({ children }) {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
}

Page.propTypes = {
  children: propTypes.object,
};
