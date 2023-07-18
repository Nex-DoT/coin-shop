import React,{useContext , useState} from 'react';
//Link
import { Link  } from 'react-router-dom';
//style
import style from "../styles/Menu.module.css"
//icon
import { BsHouseDoorFill } from "react-icons/bs";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { BsCartFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
//context
import { CoinContext } from '../context/ContexttCART';
//Menu  component
const Menu = () => {
    const [ state ] = useContext(CoinContext);
    const [menu , setMenu] = useState(false);
    const offOnMenu = ()=>{
        if (menu === false){
            setMenu(true);
        }else{
            setMenu(false);
        }
    }
    return (
        <div>
            <div className={menu ? style.divhumber2 : style.divhumber}>
                <AiOutlineMenu onClick={offOnMenu}  className={style.humber}/>
            </div>
            
             <div className={menu ? style.newmenu2 :style.newmenu}>
             <ul className={style.ul}>
                 <li>
                     <Link className={style.icon} to={"/home"}> <BsHouseDoorFill/> <h5>Home</h5></Link>
                 </li>
                 <li>
                     <Link className={style.icon} to={"/shop"}> <BsCurrencyBitcoin/> <h5>Shop</h5></Link>
                 </li>
                 <li>
                     {state.itemsCounter > 0 && <p className={style.p}>{state.itemsCounter}</p>}
                     <Link className={style.icon} to={"/cart"}> <BsCartFill/> <h5>Cart</h5> </Link>
                 </li>
                 <li>
                     <Link className={style.text} to={"/signUp"}>SignUP</Link><p>/</p><Link className={style.text}to={"/login"}>Login</Link>
                 </li>
             </ul>
         </div>
          
           
        <span className={style.span1}></span>
        <div className={style.menu}>
            <ul className={style.ul}>
                <li>
                    <Link className={style.icon} to={"/home"}> <BsHouseDoorFill/></Link>
                </li>
                <li>
                    <Link className={style.icon} to={"/shop"}> <BsCurrencyBitcoin/></Link>
                </li>
                <li>
                    {state.itemsCounter > 0 && <p className={style.p}>{state.itemsCounter}</p>}
                    <Link className={style.icon} to={"/cart"}> <BsCartFill/> </Link>
                </li>
                <li>
                    <Link className={style.text} to={"/signUp"}>SignUP</Link><p>/</p><Link className={style.text}to={"/login"}>Login</Link>
                </li>
            </ul>
            
        </div>
        </div>
    );
};

export default Menu;