import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './Checkout.css'

const Checkout = () => {
    const { id } = useParams()
    const [book, setBook] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    console.log(id)
    useEffect(() => {
        const url = `https://shrouded-oasis-92850.herokuapp.com/checkout/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBook(data[0]);
            })
    }, [])

    const handlePlaceOrder=(id)=>{
        const newBook={
            name: book.name,
            price: book.price,
            author: book.author,
            img : book.img
        }
        const newOrder={...loggedInUser,...newBook}
        console.log(newOrder)
        fetch('https://shrouded-oasis-92850.herokuapp.com/placeOrder',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(newOrder)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }


    return (
        <div>
            <Header></Header>
            <div className="container checkout">
                <div className="row checkout-title">
                    <div className="col-4">
                        <p>Book's<br/>Cover Page</p>
                    </div>
                    <div className="col-4">
                        <p>Book <br/> Name</p>
                    </div>
                    <div className="col-4">
                        <p>Price</p>
                    </div>
                </div>
                <hr/>
                <div className="row checkout-detail">
                    <div className="col-4">
                        <div>
                            <img width='60%' src={book.img} alt="" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div>
                            <h3>{book.name}</h3>
                        </div>
                    </div>
                    <div className="col-4 checkout-price ">
                        <div>
                        <h4> ${book.price}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <button className="btn checkout-btn" onClick={()=>handlePlaceOrder(book._id)}>
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default Checkout;