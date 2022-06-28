import './styles.css';
import ProductCard from 'components/ProductCard';
import SearchBox from 'components/SearchBox';

const Catalog = () => {
  return (
    <div>
      <div className="container my-4">
        <SearchBox />
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
