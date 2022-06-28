import './styles.css';
import { ReactComponent as MainImage } from 'assets/images/home-car-header.svg';
import Button from 'components/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="content">
        <div className="home-container">
          <div className="base-card home-card">
            <div className="home-image-container">
              <MainImage />
            </div>
            <div className="home-content-container">
              <h1>O carro perfeito para você</h1>
              <p>
                Conheça nossos carros e dê mais um passo na realização do seu
                sonho
              </p>
            </div>
          </div>
          <div className="base-card home-painel-container">
            <Link to="/catalog">
              <Button />
            </Link>
            <p>Comece agora a navegar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
