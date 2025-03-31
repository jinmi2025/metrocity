import { Link } from 'react-router-dom';
import './Breadcrumb.css';

const Breadcrumb = ({ items }) => {
    const validItems = items.filter(item => item.label && item.label.trim() != '');
    return (
        <nav className="breadcrumb">
            {validItems.map((item, idx) =>
                <p key={idx}>
                    <Link to={item.link}>{item.label}</Link>
                </p>
            )}
        </nav>
    )
};

export default Breadcrumb;