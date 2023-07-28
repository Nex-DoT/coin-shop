import React, { useContext , lazy , Suspense } from 'react';
import { Route , Routes , Navigate } from 'react-router-dom';
//backgraound
import BackGround from './backgraound/BackGround';
import PhoneBack from './backgraound/PhoneBack';
//context
//style
import style from "./styles/Box.module.css";
//component
const Login = lazy(()=> import ("./components/LOGIN/Login"));
const SignUp = lazy(()=> import ("./components/SignUp/SignUp"));
const Menu = lazy(()=> import ("./components/Menu"));
const Shop = lazy(()=> import ("./components/SHOP/Shop"));
const Cart = lazy(()=> import ("./components/CART/Cart"));
const Home = lazy(()=> import ("./components/HOME/Home"));
const App = () => {
    const PhoneOrNot = ()=>{
        return navigator.maxTouchPoints > 0 && /Android|iPhone/.test(navigator.userAgent) ;
    }
    const Data = PhoneOrNot();
    return (
        <div className={style.overflow}>
            {Data ? <PhoneBack/> : <BackGround/>}
            <Menu></Menu>
            <div className={style.component}>
              <Suspense fallback={<div>Loading</div>}>
                  <Routes>
                      <Route path='/home' element={<Home/>}/>
                      <Route path='/cart' element={<Cart/>}/>
                      <Route path='/signUp' element={<SignUp/>}/>
                      <Route path='/login' element={<Login/>}/>
                      <Route path='/shop' element={<Shop/>}/>
                      <Route path='/' element={<Navigate to='/home'/>}/>
                  </Routes>
              </Suspense>
            </div>
        </div>
    );
};

export default App;