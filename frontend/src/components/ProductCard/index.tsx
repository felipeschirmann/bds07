import './styles.css';
import ProductImg from 'assets/images/car-card 1.png';
import ProductButton from 'components/ProductButton';

const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={ProductImg} alt="" />
      </div>
      <div className="card-botton-container">
        <h6>Audi Supra TT</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
      </div>
      <ProductButton />
    </div>
  );
};

export default ProductCard;
