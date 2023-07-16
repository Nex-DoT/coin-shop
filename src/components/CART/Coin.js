import React,{useContext} from 'react';
//context 
import { CoinContext } from '../../context/ContexttCART';
//style
import style from "../../styles/Coin.module.css";
//function
import { trueFalse } from '../../function/fucntion';
import { productN } from '../../function/fucntion';
import { number } from '../../function/fucntion';
//icon 
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

const Coin = ({data}) => {
    const [state , dispatch] = useContext(CoinContext);
    return (
        <tr>
             <td><div className={style.img}><img src={data.image} alt="" /></div></td>
             <td> <p>name <br/>{data.name}</p> </td>
             <td><p>symbol <br/>{data.symbol}</p></td>
             <td><p>Price <br/> {data.current_price}</p></td>
             <td><p>changePercentage {data.price_change_percentage_24h}%</p></td>
             <td><p>capChange {data.market_cap_change_24h.toFixed()}</p></td>
             <td><div className={style.div}>
                  {productN(state , data) === 1 && <button onClick={()=>dispatch({type:"REMOVE" , payload:data})}><AiOutlineDelete/></button>}
                  {productN(state , data) > 1 && <button onClick={()=>dispatch({type:"DECREASE" , payload:data})}><AiOutlineMinus/></button>}
                  {number(state,data) && <p>{number(state,data)}</p>}
                  {
                  trueFalse(state , data)?
                  <button onClick={()=>dispatch({type:"INCREASE" , payload:data})}><AiOutlinePlus/></button>:
                  <button onClick={()=>dispatch({type:"ADD" , payload:data})} className={style.add}>Add to cart</button>
                  } </div></td>
        </tr>
    );
};

export default Coin;