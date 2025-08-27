import React from "react";
import useSmoothScroll from "../hooks/useSmoothScroll";
import "../styles/components/topbtn.scss";

const TopBtn = () => {
    const scrollTo = useSmoothScroll();

    const handleClick = () => {
        scrollTo("top");  // 최상단 요소 id = "top"
    };

    return (
        <button className="top-btn" onClick={handleClick}>
            위로 올라가는 버튼
        </button>
    );
};

export default TopBtn;
