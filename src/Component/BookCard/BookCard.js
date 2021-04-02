import React, { useEffect, useState } from 'react';
import './BookCard.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const BookCard = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBooks(data)
                console.log(books)
            })
    }, [])

    return (
        <div className="container-fluid book-container-fluid">
            <div className="container book-container">
            <div className="row">
                {
                    books.map((book) => {
                        return <div className="col-4">
                            <div className="card">
                                <div className="card-img-container">
                                <img src={book.img} className="card-img-top" alt="..." />

                                </div>
                            <div className="card-body">
                                <h3 className="card-title">{book.name}</h3>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div className="card-price"><h4>${book.price}</h4></div>
                                    <div className="card-btn-container"><Link to={`/checkout/${book._id}`}><button className="card-btn">Buy Now</button></Link></div>
                                </div>
                            </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
        </div>
    );
};

export default BookCard;