import React,{useContext} from 'react';
import { CoinContext } from '../../context/ContexttCART';
import style from "../../styles/Coin.module.css";

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
            
        </tr>
    );
};

export default Coin;