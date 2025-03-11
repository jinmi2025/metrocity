import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../data";
import { SearchWrap } from "../search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSearchMinus } from "@fortawesome/free-solid-svg-icons";
import './HeadUtils.css';

const HeadUtils = () => {
    const { user, logout } = useContext(AuthContext);
    const [isSearch, setIsSearch] = useState(true);

    const handleSearchView = () => {
        setIsSearch(!isSearch);
    };

    return (
        <div id="HeadUtils">
            <div>
                {
                    user
                        ? <p onClick={logout}>Logout</p>
                        : <Link to='/account/signin'>Login</Link>
                }
            </div>
            <div><Link to='/account/signup'>Join</Link></div>
            <div><Link to='/'>Cart(0)</Link></div>
            <div className="btn-search" onClick={handleSearchView}>
                {isSearch
                    ? <FontAwesomeIcon icon={faSearchMinus} />
                    : <FontAwesomeIcon icon={faSearch} />
                }
            </div>
            {isSearch && <SearchWrap handleSearchView={handleSearchView} />}
        </div>
    )
};

export default HeadUtils;