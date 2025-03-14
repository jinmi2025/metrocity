import { Link } from "react-router-dom";
import "./MainCard.css";

const MainCard = ({ src, title, text, href }) => {
    return (
        <div className="MainCard">
            <p className="photo"><img src={src} alt={title} /></p>
            <div className="text">
                <p className="txt1">{title}</p>
                <p className="txt2">{text}</p>
                <p className="more"><Link to={href}>VIEW MORE</Link></p>
            </div>
        </div>
    )
};

export default MainCard;