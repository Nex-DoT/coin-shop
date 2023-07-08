import React from 'react';

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
                    <form>
        <h2>Sign-Up</h2>
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
               <button>SignUp</button>
               <button>Login</button>
            </div>
        </form>
        </>
    );
};

export default Login;