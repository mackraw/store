import propTypes from 'prop-types';

export default function QuantityControl({ className = '' }) {
  const updateQuantity = (e) => {
    const { operation } = e.target.dataset;
    if (operation === 'increment') {
      const input = e.target.previousElementSibling;
      const currentValue = parseInt(input.value);
      input.value = currentValue + 1;
    } else if (operation === 'decrement') {
      const input = e.target.nextElementSibling;
      const currentValue = parseInt(input.value);
      if (currentValue > 1) {
        input.value = currentValue - 1;
      }
    }
  };

  const validateNumber = (e) => {
    const initial = e.target.value;
    if (Number.isNaN(initial)) {
      e.target.value = 1;
    }
    if (e.keyCode < 48 || e.keyCode > 57) {
      if (!(e.keyCode === 8)) {
        e.preventDefault();
      }
    }
  };

  return (
    <div className={`quantity-control ${className}`}>
      <button
        type="button"
        onClick={updateQuantity}
        data-operation="decrement"
        className="qtyBtn"
      >
        -
      </button>
      <input
        type="text"
        maxLength={2}
        className="qtyNum"
        onKeyDown={validateNumber}
        defaultValue="1"
      />
      <button
        type="button"
        onClick={updateQuantity}
        data-operation="increment"
        className="qtyBtn"
      >
        +
      </button>
    </div>
  );
}

QuantityControl.propTypes = {
  className: propTypes.string,
};
