import placeholder from './assets/placeholder.jpg'
import PropTypes from 'prop-types';

function ProductCard({
  name = "Noodles",
  description = "noodles",
  price = 4560,
}) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={placeholder} alt="Classic Zinger Box" />
      </div>

      <div className="product-details">
        <h2>{name}</h2>
        <p>
          {description}
        </p>
      </div>

      <div className="buy-section">
        <span>RS{price}</span>
        <button className="buy">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
ProductCard.propTypes = {
  name : PropTypes.string,
  description :PropTypes.string,
  price : PropTypes.number,
}
