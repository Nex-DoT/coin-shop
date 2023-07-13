import React,{useContext} from 'react';
//Link
import { Link  } from 'react-router-dom';
//style
import style from "../styles/Menu.module.css"
//icon
import { BsHouseDoorFill } from "react-icons/bs";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { BsCartFill } from "react-icons/bs";
//context
import { CoinContext } from '../context/ContexttCART';
//Menu  component
const Menu = () => {
    const [ state ] = useContext(CoinContext)
    return (
        <div>
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