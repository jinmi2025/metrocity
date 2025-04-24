import { useState } from "react";
import "./DetailContent.css";

const DetailContent = ({ product }) => {
    // 탭 상태
    const [activeTab, setActiveTab] = useState(0);
    const tabOptions = [
        { label: "상품설명" },
        { label: "상품후기" },
        { label: "배송/교환/반품" },
        { label: "취급시 주의사항" },
    ];

    const [isExpanded, setIsExpanded] = useState(false);

    const handleTabClick = (idx) => {
        setActiveTab(idx);
    };

    const detailImages = product.details || [];


    return (
        <div className="detail-content">
            <div className="tabBtn">
                {tabOptions.map((tab, idx) => (
                    <p
                        key={idx}
                        className={activeTab === idx ? "active" : ""}
                        onClick={() => handleTabClick(idx)}
                    >
                        <button>{tab.label}</button>
                    </p>
                ))}
            </div>
            {activeTab === 0 && (
                <div className="detail-info">
                    {detailImages.length > 0 && (
                        <div className="additional-details">
                            <div
                                className={`additional-details-images ${isExpanded ? "auto" : ""}`}
                                style={{
                                    height: isExpanded ? "auto" : "500px",
                                    overflow: "hidden",
                                }}
                            >
                                {detailImages.map((img, index) => (
                                    <p key={index}>
                                        <img src={img} alt={`상세정보 ${index}`} />
                                    </p>
                                ))}
                            </div>
                            {!isExpanded && (
                                <p>
                                    <button onClick={() => setIsExpanded(true)}>
                                        상품 정보 더보기
                                    </button>
                                </p>
                            )}
                        </div>
                    )}
                    <div className="detail-descript">
                        <h3>상품정보</h3>
                        <div>{product.description}</div>
                    </div>
                </div>
            )}
            {activeTab === 1 && <div>상품후기 영역</div>}
            {activeTab === 2 && <div>배송/교환/반품 안내 영역</div>}
            {activeTab === 3 && <div>취급시 주의사항 안내 영역</div>}
        </div>
    )
};

export default DetailContent;