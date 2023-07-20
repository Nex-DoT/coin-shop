import React,{useEffect , useContext} from 'react';
import { backContext } from '../../function/Reducer';
//icon
import { BsGithub } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { BsCartFill } from "react-icons/bs";
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
                    <br/>
                    <br/>
                        <ul>
                            <li>React</li>
                            <li>SPA (react-router-dom)</li>
                            <li>axios</li>
                            <li>CSS</li>
                        </ul>
                        <br/>
                    Now let's go through the components one by one, but before that, let me provide some information about the background.
                    The background could have been simply included in a component, but for more challenges and practice, we decided to useContext hook, and useEffect hook to handle state changes and display the background using the Ternary operator.
                </p>
                <br/>
                <br/> 
                <div>
                    <div className={style.iconDiv}>
                        <BsCurrencyBitcoin className={style.icon}/>
                        <h1>Shop component</h1>
                    </div>
                    <p>The Shop component receives its data from an API. In our design, when filtering database names in the input field, we receive new information and create search results.</p>
                </div>
                    <br/>
                    <br/>
                <div>
                    <div className={style.iconDiv}>
                        <BsCartFill className={style.icon}/>
                        <h1>Card component</h1>
                    </div>
                            <p>Moving on to the Card component: it consists of three sections. The first section displays the price and quantity of items in the shopping cart; it also includes Pay and Clear buttons that work if there are items in the cart.
                            The second section displays all available information related to items in the shopping cart; here you can add or remove items. If space is limited on smaller screens, part of this section will be removed so that it doesn't overflow.
                            Finally, we have a third section displaying three coins that had a significant increase within 24 hours; these coins are suggested as suitable investment options for users.</p>
                </div>
                <br/>
                <br/>
                <div>
                    <div className={style.iconDiv}>
                        <h1>Login and Sign Up page</h1>
                    </div>
                    <p>Regarding Sign-up and Login components: validation is implemented using functions specifically designed for them. If all conditions pass successfully (i.e., form inputs are valid), no error will be returned.</p>
                </div>

            </div>
        </div>
    );
};

export default Home;