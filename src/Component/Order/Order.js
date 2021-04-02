import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './Order.css'

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orders,setOrders] = useState([])
    useEffect(()=>{
        fetch(`https://shrouded-oasis-92850.herokuapp.com/orders?email=${loggedInUser.email}`,{
            method: 'GET',
            headers:{
                'Content-type':'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setOrders(data);
        })
    },[])
    return (
        <div>
            <Header></Header>
            <div>
                <h3>Your Orders :</h3>
            </div>
            <div className="orders-container">
            <div className="container">
                    <div className="row order-head">
                        <div className="col-4">Book Name</div>
                        <div className="col-4">Book Author</div>
                        <div className="col-4">Book Price</div>
                    </div>
                    
                    {
                        orders.map((order)=>{
                            return <div className="row order-row">
                                <div className="col-4">{order.name}</div>
                                <div className="col-4">{order.author}</div>
                                <div className="col-4">${order.price}</div>
                                
                            </div>
                        })
                    }
                    <hr/>
                
            </div>
            </div>

        </div>
    );
};

export default Order;