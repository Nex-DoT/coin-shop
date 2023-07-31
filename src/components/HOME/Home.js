import React,{useEffect , useContext} from 'react';
import { backContext } from '../../context/Reducer';
//icon
import { BsGithub } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
//style
import style from "./Home.module.css"
const Home = () => {
    const [statee , dispatchh] = useContext(backContext)
    useEffect(()=>{
        dispatchh({type:"new" , payload:"home"});
    },[])
    return (
        <div className={style.home}>
            <div className={style.appinfo}>
            <div>
                <div className={style.iconDiv}>
                      <h2>Who create this app</h2>
                </div>
                    <p>
                    Hello, my name is Erfan. I am 20 years old and currently studying psychology at Payam Noor University. I have been learning front-end development for about a year now, and I have acquired the following skills:
                       <br/>
                       <br/>
                        <ul>
                            <li>React</li>
                            <li>Github/Git (intermediate level)</li>
                            <li>SPA (Single Page Application)</li>
                            <li>Axios</li>
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>Grid</li>
                            <li>Flex box</li>
                            <li>Responsive design</li>
                            <li>HTML</li>
                        </ul> 
                        <br/>
                        <br/> 
                       <h4>I executed this project to put into practice my recent development in React technology.</h4> 
                    </p>
                    <br/>
                    <br/>
                    <div className={style.iconDiv}>
                        <h2>Contact details</h2>
                    </div>
                    <div className={style.number}>
                        <BsGithub />
                        <a href="https://github.com/Nex-DoT">github</a>
                    </div>
                    <div className={style.number}>
                        <BsTelegram />
                        <a href="https://t.me/Nex_DoT">Telegram</a>
                    </div>
                <div>
                <br/>
                <br/>
                </div>
            </div>
                <div className={style.iconDiv}>
                     <h1>Some information about App</h1>
                </div>
                <p>
                    This app is built for practice and as a sample project. The following components were used to build this app:
                        </p>
                    <br/>
                    <br/>
                        <ul>
                            <li>React</li>
                            <li>SPA (react-router-dom)</li>
                            <li>axios</li>
                            <li>CSS</li>
                            <li>Grid</li>
                        </ul>
                        <br/>
            </div>
        </div>
    );
};

export default Home;