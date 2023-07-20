import React,{useContext, useEffect } from 'react';
//style 
import style from "../../styles/Cart.module.css";
//context
import { CoinContext } from '../../context/ContexttCART';
import { backContext } from '../../function/Reducer';
//component
import Coin from './Coin';
import PositiveData from '../PositiveData';
//icon
import { BsCartXFill } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
//link
import { Link } from 'react-router-dom';


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
                        <div className={style.box1}>
                            <div>
                                 <p> itemsCounter : {state.itemsCounter}</p>
                            </div>
                            <div>
                                 <p>Price of Coins : {state.total}</p>
                            </div>
                            <div className={style.btn}>
                                  {state.itemsCounter > 0 ? <button onClick={()=>dispatch({type:"CLEAR"})}>Clear Cart</button> : <button>Clear Cart</button>}    
                                  {state.itemsCounter > 0 ? <button onClick={()=>dispatch({type:"BUY"})}>Buy</button> : <button>Buy</button>}      
                            </div>
                        </div> 


                            {/* /component of coins */}
                        <div className={style.scroll}>
                          <table>
                            <tbody>
                              {state.checkout && <div className={style.boxbuy}>
                                                    <BsCheckCircleFill className={style.buyIcon}/>
                                                    <h3>
                                                    Thank you for your purchase!
                                                    </h3> </div>}
                              {state.itemsCounter===0 && state.checkout===false &&
                                <div className={style.boxicon}><BsCartXFill className={style.icon}/> <h1>Your Cart Is Empty.</h1><Link className={style.link} to={"/shop"}>SHOP</Link></div>}
                              {state.itemsCounter>0 &&
                                state.selectedItems.map(item => <Coin key={item.id} data={item} /> )}
                            </tbody>
                          </table>
                        </div>
                      {<div className={style.box3}> <p>Discover our top picks just for you!</p><PositiveData/></div>}
            
        </div>
    );
};

export default Cart;