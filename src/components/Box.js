import React from 'react';
import { Route , Routes , Navigate } from 'react-router-dom';
//component
import SingUp from './SignUp';
import Login from './Login';
import BackGround from './BackGround';
//style
import style from "../styles/Box.module.css";
import SignUp from './SignUp';

const Box = () => {
    return (
        <div>
            <BackGround/>
            <div className={style.component}>
                <Routes>
                    <Route path='/signUp' element={<SignUp/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/' element={<Navigate to='/signUp'/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default Box;