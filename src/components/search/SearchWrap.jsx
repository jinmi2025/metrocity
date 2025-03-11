import { SearchForm, SearchKeyword, SearchBestItem } from "./index.js"
import './search.css';

const SearchWrap = ({ handleSearchView }) => {
    return (
        <div className="SearchWrap">
            <SearchForm handleSearchView={handleSearchView} />
            <div className="row2">
                <SearchKeyword handleSearchView={handleSearchView} />
                <SearchBestItem />
            </div>
        </div>
    )
};

export default SearchWrap;