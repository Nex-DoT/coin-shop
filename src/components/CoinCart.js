import React from 'react';
// Link
import { Link } from 'react-router-dom';
//style
import style from "../styles/CoinCart.module.css"
const CoinCart = ({data}) => {
    return (
        <div className={style.card} >
            <div className={style.content}>
                <div className={style.nameSymbol}>
                    <div className={style.img}>
                        <img src={data.image} alt="" />
                    </div>
                    <div className={style.value}>
                        <h3>{data.name} </h3>
                        <h5 className={style.price}>${(+data.price_change_24h).toFixed(5)}</h5>
                        <Link to={"detail:id"}>Details</Link>
                    </div> 
                </div>
                <div className={style.btn}>
                    <button>-</button>
                    <p></p>
                    <button>+</button>
                </div>
            </div>
        </div>
    );
};

export default CoinCart;