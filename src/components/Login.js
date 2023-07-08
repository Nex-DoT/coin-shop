import React,{useState} from 'react';
//style
import style from "../styles/Login.module.css"
//Link
import { Link } from 'react-router-dom';
const Login = () => {
    const [data , setData] = useState({
        email: "" ,
        password: "" ,
    })
const cheangeHandeler = event=>{
    setData({...data , [event.target.name] : event.target.value})
}
    return (
        <>
              <form className={style.form}>
        <h2>Login</h2>
            <div>

                <div className={style.email}>
                    <h6>Email</h6>
                    <input type="email" name="email" value={data.email} onChange={cheangeHandeler}/>
                </div>
                <div className={style.pass}>
                    <h6>Password</h6>
                    <input type="password" name="password" value={data.password} onChange={cheangeHandeler}/>
                </div>

            </div>

            <div className={style.btn}> 
               <Link className={style.Link} to={"/signUp"}>SignUp</Link>
               <button>Login</button>
            </div>
        </form>
        </>
    );
};

export default Login;