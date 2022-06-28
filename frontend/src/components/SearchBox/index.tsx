import './styles.css';
import SearchButton from 'components/SearchButton';

const SearchBox = () => {
  return (
    <div className="base-card search-box">
      <input type="text" placeholder="Digite sua busca" />
      <SearchButton />
    </div>
  );
};

export default SearchBox;
