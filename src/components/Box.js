import React, { useContext , useEffect } from 'react';
import { Route , Routes , Navigate } from 'react-router-dom';
//backgraound
import BackGround from './BackGround';
import Home from "../backgraound/Home";
import Shop2Back from "../backgraound/Shop2Back";
import ShopBack from "../backgraound/ShopBack";
//context
import { backContext } from '../function/Reducer';
//style
import style from "../styles/Box.module.css";
//component
import Login from './Login';
import SignUp from './SignUp';
import Menu from './Menu';
import Shop from './Shop';
import Cart from './CART/Cart';

const Box = () => {
    const [statee , dispatchh ] = useContext(backContext)
    return (
        <div className={style.overflow}>
            {statee.loginSignup && <BackGround/>}
            {statee.cart && <Home/>}
            {statee.shop && <Shop2Back/>}
            {statee.home && <ShopBack/>}
            <Menu></Menu>
            <div className={style.component}>
                <Routes>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/signUp' element={<SignUp/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/shop' element={<Shop/>}/>
                    <Route path='/' element={<Navigate to='/signUp'/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default Box;