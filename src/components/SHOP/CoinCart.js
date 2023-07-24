import React,{useContext}  from 'react';
// Link
import { Link } from 'react-router-dom';
//style
import style from "../../styles/CoinCart.module.css"
//context
import { CoinContext } from '../../context/ContexttCART';
//function
import { trueFalse } from '../../functions/fucntion';
import { productN } from '../../functions/fucntion';
import { number } from '../../functions/fucntion';
//icon 
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

const CoinCart = ({data}) => {
    const [state , dispatch] = useContext(CoinContext)
    return (
        <div className={style.card} >
            <div className={style.content}>
                <div className={style.nameSymbol}>
                    <div className={style.img}>
                        <img src={data.image} alt="" />
                    </div>
                    <div className={style.value}>
                        <h3>{data.name} </h3>
                        <h5 className={+data.price_change_24h<=0 ? style.red : style.green}>${(+data.price_change_24h).toFixed(5)}</h5>
                        <Link className={style.Link} to={"detail:id"}>Details</Link>
                    </div> 
                </div>
                <div className={style.btn}>
                    {productN(state , data) === 1 && <button onClick={()=>dispatch({type:"REMOVE" , payload:data})}><AiOutlineDelete/></button>}
                    {productN(state , data) > 1 && <button onClick={()=>dispatch({type:"DECREASE" , payload:data})}><AiOutlineMinus/></button>}
                    {number(state,data) && <p>{number(state,data)}</p>}
                   {
                     trueFalse(state , data)?
                     <button onClick={()=>dispatch({type:"INCREASE" , payload:data})}><AiOutlinePlus/></button>:
                     <button onClick={()=>dispatch({type:"ADD" , payload:data})} className={style.add}>Add to cart</button>

                    } 
                </div>
            </div>
        </div>
    );
};

export default CoinCart;