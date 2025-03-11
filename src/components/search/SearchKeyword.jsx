import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchKeyword = ({ handleSearchView }) => {
    const navigate = useNavigate();
    const [keywords, setKeywords] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/data/recommendKeywords.json');
                setKeywords(response.data.recommendations);
            } catch (error) {
                console.error('추천 검색어 로딩 에러 : ', error);
            }
        };

        fetchData();
    }, []);

    const handleClickKeyword = (keyword) => {
        navigate(`/search?keyword=${keyword}`);
        handleSearchView();
    };

    return (
        <div className="SearchKeyword">
            <h3>추천 검색어</h3>
            <ul>
                {keywords.map((keyword, index) =>
                    <li key={index} onClick={() => { handleClickKeyword(keyword) }}>
                        <span className="number">{index + 1}.</span>
                        <span className="text">{keyword}</span>
                    </li>
                )}
            </ul>
        </div>
    )
};

export default SearchKeyword;