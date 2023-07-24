import React, { useContext , useEffect } from 'react';
import { Route , Routes , Navigate } from 'react-router-dom';
//backgraound
import BackGround from './backgraound/BackGround';
import HomeBack from './backgraound/HomeBack';
import Shop2Back from "./backgraound/Shop2Back";
import ShopBack from "./backgraound/ShopBack";
//context
import { backContext } from './context/Reducer';
//style
import style from "./styles/Box.module.css";
//component
import Login from './components/LOGIN/Login';
import SignUp from './components/SignUp/SignUp';
import Menu from './components/Menu';
import Shop from './components/SHOP/Shop';
import Cart from './components/CART/Cart';
import Home from './components/HOME/Home';

const App = () => {
    const [statee , dispatchh ] = useContext(backContext)
    return (
        <div className={style.overflow}>
            {statee.loginSignup && <BackGround/>}
            {statee.cart && <HomeBack/>}
            {statee.shop && <Shop2Back/>}
            {statee.home && <ShopBack/>}
            <Menu></Menu>
            <div className={style.component}>
                <Routes>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/signUp' element={<SignUp/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/shop' element={<Shop/>}/>
                    <Route path='/' element={<Navigate to='/home'/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;