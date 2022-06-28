import './styles.css';
import Navbar from 'components/Navbar';
import ProductCard from 'components/ProductCard';
import SearchCard from 'components/SearchCard'

const Catalog = () => {
  return (
    <div>
      <Navbar />
      <div className="container my-4">
        <SearchCard/>
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
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
