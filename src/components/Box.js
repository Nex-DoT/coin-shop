import React from 'react';
import { Route , Routes , Navigate } from 'react-router-dom';
//component
import SingUp from './SingUp';
import Login from './Login';
import BackGround from './BackGround';
//style
import style from "../styles/Box.module.css";

const Box = () => {
    return (
        <div>
            <BackGround/>
            <div className={style.inBox}>
                <Routes>
                    <Route path='/signUp' element={<SingUp/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/' element={<Navigate to='/singUp'/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default Box;