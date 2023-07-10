import React from 'react';
import { Link } from 'react-router-dom';
import style from "../styles/Menu.module.css"
import { BsHouseDoorFill } from "react-icons/bs";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { BsCartFill } from "react-icons/bs";
const Menu = () => {
    return (
        <div className={style.menu}>
            <ul className={style.ul}>
                <li>
                    <Link to={"/home"}> <BsHouseDoorFill/></Link>
                </li>
                <li>
                    <Link to={"/shop"}> <BsCurrencyBitcoin/></Link>
                </li>
                <li>
                    <Link to={"/cart"}> <BsCartFill/> </Link>
                </li>
                <li>
                    <Link to={"/signUp"}>SignUP</Link>/<Link to={"/login"}>Login</Link>
                </li>
            </ul>
            
        </div>
    );
};

export default Menu;