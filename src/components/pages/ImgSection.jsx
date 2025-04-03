import { useState, useEffect } from 'react';
import './ImgSection.css';

const ImgSection = ({ productThumbs }) => {

    // 이미지 갤러리의 큰 이미지 
    const [selectedImg, setSelectedImg] = useState(null);

    useEffect(() => {
        if (productThumbs) {
            setSelectedImg(productThumbs[0])
        };
    }, [productThumbs]);


    return (
        <div className="ImgSection">
            <div className='main-img'>
                <p><img src={selectedImg} /></p>
                <div className='pager'>
                    <ul>
                        {productThumbs && productThumbs.map((img, idx) =>
                            <li
                                key={idx}
                                onClick={() => setSelectedImg(img)}
                                className={selectedImg == img ? 'active' : ''}
                            >
                                <button>{idx + 1}</button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <div className='thumbs-list'>
                <ul>
                    {productThumbs && productThumbs.map((img, idx) =>
                        <li
                            key={idx}
                            onClick={() => setSelectedImg(img)}
                            className={selectedImg == img ? 'active' : ''}
                        >
                            <img src={img} />
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default ImgSection;