import React from 'react';
import style from "./ShopBack.module.css";

const ShopBack = () => {
    return (
        <div className={style.back}>
            <span className={style.span3}></span>
            <span className={style.span4}></span>
            <span className={style.span1}></span>
            <span className={style.span2}></span>
        </div>
    );
};

export default ShopBack;