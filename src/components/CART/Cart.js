import React,{useContext} from 'react';
//style 
import style from "../../styles/Cart.module.css";
//context
import { CoinContext } from '../../context/ContexttCART';

const Cart = () => {
    const [state , dispatch] = useContext(CoinContext);
    return (
        <div>
          {/* for price , quantity */}
            <div>

            </div>
          {/* /component of coins */}
            <div>

            </div>
            
        </div>
    );
};

export default Cart;