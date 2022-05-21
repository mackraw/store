import propTypes from 'prop-types';

export default function CartBtn({ className = '', onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`product-btn ${className}`}
    >
      {children}
    </button>
  );
}

CartBtn.propTypes = {
  onClick: propTypes.func,
  className: propTypes.string,
  children: propTypes.string,
};
