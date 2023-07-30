import React , {useContext} from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/DataCoinApi';
//style
import style from "../../styles/PositiveData.module.css"
const PositiveData = () => {
  const [data,positive] =useContext(DataContext);
    return (
        <div className={style.newDiv}>
            {positive.map(item=> <div className={style.box10} key={item.id}>
                                            <div className={style.img2}><img className={style.img3} src={item.image} alt="" /></div>
                                            <div className={style.details}>
                                                <p>{item.name}</p>
                                                <p className={style.green}>{item.price_change_percentage_24h}%</p>
                                                <p><Link className={style.link} to={"/shop"}>Coin List</Link></p>
                                                
                                            </div>
                                        </div>)}
        </div>
    );
};

export default PositiveData;