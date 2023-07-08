import React,{useState , useEffect} from 'react';
//Link
import { Link } from 'react-router-dom';
//style
import style from "../styles/SignUp.module.css"
const SignUp = () => {
    const [data , setData] = useState({
        username: "" ,
        email: "" ,
        password: "" ,
        cPassword: "" ,
        checkbox:false
    })
const cheangeHandeler = event=>{
    setData({...data , [event.target.name] : event.target.value})
}
    return (
        <>
        <form>
        <h2>Sign-Up</h2>
            <div>
                <div className={style.user}>
                    <h6>Username</h6>
                    <input type="text" name="username" value={data.username} onChange={cheangeHandeler}/>
                </div>
                <div className={style.email}>
                    <h6>Email</h6>
                    <input type="email" name="email" value={data.email} onChange={cheangeHandeler}/>
                </div>
                <div className={style.pass}>
                    <h6>Password</h6>
                    <input type="password" name="password" value={data.password} onChange={cheangeHandeler}/>
                </div>
                <div className={style.pass}>
                    <h6>Confirm Password</h6>
                    <input type="password" name="cPassword"  value={data.cPassword} onChange={cheangeHandeler}/>
                </div>
            </div>
            <div className={style.check}>
                <a href="#">I agree to the terms and conditions.</a>
                <input type="checkbox" />
            </div>
            <div className={style.btn}> 
               <Link className={style.Link} to={"/login"}>Login</Link>
               <button>SignUp</button>
            </div>
        </form>
        </>
    );
};

export default SignUp;