import React, { useEffect } from 'react';
import { Route , Routes , Navigate } from 'react-router-dom';
//backgraound

//style
import style from "../styles/Box.module.css";
//component
import Login from './Login';
import SignUp from './SignUp';
import Menu from './Menu';
import Shop from './Shop';
import Cart from './CART/Cart';



const Box = () => {
    return (
        <div className={style.overflow}>
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