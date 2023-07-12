import React from 'react';
import { Route , Routes , Navigate } from 'react-router-dom';
//component
import SingUp from './SignUp';
import Login from './Login';
import BackGround from './BackGround';
//style
import style from "../styles/Box.module.css";
//component
import SignUp from './SignUp';
import Menu from './Menu';
import Shop from './Shop';
//context
//context


const Box = () => {
    return (
        <div className={style.overflow}>
            <BackGround/>
            <Menu></Menu>
            <div className={style.component}>
                <Routes>
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