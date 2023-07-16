import React,{useContext, useEffect } from 'react';
//style 
import style from "../../styles/Cart.module.css";
//context
import { CoinContext } from '../../context/ContexttCART';
import { backContext } from '../../function/Reducer';
//component
import Coin from './Coin';
import PositiveData from '../PositiveData';


const Cart = () => {
  const [statee , dispatchh] = useContext(backContext);
    useEffect(()=>{
      
      dispatchh({type:"new" , payload:"cart"});
        console.log(statee);
    },[])
    const [state , dispatch] = useContext(CoinContext);

    return (
        <div className={style.box}>
          {/* for price , quantity */}
              <div>
            <div className={style.box1}>  
            <div className={style.box2}>
              <div>
                 <p> itemsCounter : {state.itemsCounter}</p>
              </div>
              <div>
                 <p>Price of Coins : {state.total}</p>
              </div>
                  <div className={style.btn}>
                        <button onClick={()=>dispatch({type:"CLEAR"})}>Clear Cart</button>
                        <button onClick={()=>dispatch({type:"BUY"})}>Buy</button>
                  </div>
            </div> 
            </div>
              {<div className={style.box3}><PositiveData/></div>  }
              </div>
          {/* /component of coins */}
            <div className={style.scroll}>
              <table>
                <tbody>
                  {state.itemsCounter>0 && state.selectedItems.map(item => <Coin key={item.id} data={item} /> )}
                </tbody>
              </table>

            </div>
            
        </div>
    );
};

export default Cart;