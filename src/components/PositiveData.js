import React , {useContext} from 'react';
import { Link } from 'react-router-dom';
import { positiveContext } from '../context/PositiveItems';
//style
import style from "../styles/PositiveData.module.css"
const PositiveData = () => {
  const [newpositiveData] =useContext(positiveContext);
    return (
        <div className={style.newdiv}>
            <p>Discover our top picks just for you!</p>
            {newpositiveData.map(item=> <div className={style.box} key={item.id}>
                                            <div className={style.div}><img src={item.image} alt="" /></div>
                                            <div>
                                            <p>{item.name}</p>
                                            <p className={style.green}>{item.price_change_percentage_24h}%</p>
                                            <Link className={style.link} to={"/shop"}>Coin List</Link>
                                            </div>
                                        </div>)}
        </div>
    );
};

export default PositiveData;