import React,{useContext} from 'react';
import { CoinContext } from '../../context/ContexttCART';
import style from "../../styles/Coin.module.css";

const Coin = ({data}) => {
    const [state , dispatch] = useContext(CoinContext);
    return (
        <tbody>
            <tr>
                <td><div><img src={data.image} alt="" /></div></td>
                <td> <h3>{data.name}</h3> </td>
                <td><p>{data.symbol}</p></td>
                <td><p>{data.current_price}</p></td>
                <td><p>{data.price_change_percentage_24h}</p></td>
                <td><p>{data.market_cap_change_24h}</p></td>
            </tr>
        </tbody>
    );
};

export default Coin;