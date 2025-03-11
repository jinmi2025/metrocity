import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchForm = ({ handleSearchView }) => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const handleSearchInput = (e) => {
        setSearch(e.target.value);
    };

    const handleSearchSubmit = () => {
        navigate(`/search?keyword=${search}`);
        handleSearchView();
    };



    return (
        <div className="SearchForm">
            <input type="text" placeholder="검색어를 입력해주세요."
                value={search} onChange={handleSearchInput}
            />
            <button onClick={handleSearchSubmit}>
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    )
};

export default SearchForm;