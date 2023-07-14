import React,{useContext} from 'react';
//style 
import style from "../../styles/Cart.module.css";
//context
import { CoinContext } from '../../context/ContexttCART';
//component
import Coin from './Coin';


const Cart = () => {
    const [state , dispatch] = useContext(CoinContext);
    return (
        <div className={style.box}>
          {/* for price , quantity */}
            <div>   
              <div>
                 <h3>Item And Price</h3>
                 <p> itemsCounter : {state.itemsCounter}</p>
              </div>
              <div>
                 <h3>Price of Coins : {state.total}</h3>
              </div>
              <button onClick={()=>dispatch({type:"CLEAR"})}>Clear Cart</button>
              <button onClick={()=>dispatch({type:"BUY"})}>Buy</button>
            </div>
          {/* /component of coins */}
            <div className={style.scroll}>
              <h3>Coins</h3>
              <table>
                <thead>
                  <tr>
                    <th>image</th>
                    <th>name</th>
                    <th>symbol</th>
                    <th>current_price</th>
                    <th>P percentage 24h</th>
                    <th>market change 24h</th>
                  </tr>
                </thead>

              {state.selectedItems.map(item => <Coin key={item.id} data={item} /> )}
              </table>

            </div>
            
        </div>
    );
};

export default Cart;