import React, { useEffect, useState } from 'react';
import Delete from '../../Img/Group 33150.png';
import './ManageBook.css'

const ManageBook = () => {
    const [books,setBooks]=useState([])
    useEffect(()=>{
        fetch('https://shrouded-oasis-92850.herokuapp.com/addBooks')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setBooks(data)
        })
    },[])
    const handleRemoveBook=(id)=>{
        console.log(id)
    
        const url=`https://shrouded-oasis-92850.herokuapp.com/delete/${id}`
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
        <div className="manage-container">
            <h3 className="manage-title">Manag Book</h3>
            <div className="container">
                    <div className="row manage-head">
                        <div className="col-4">Book Name</div>
                        <div className="col-4">Book Author</div>
                        <div className="col-2">Book Price</div>
                        <div className="col-2">Action</div>
                    </div>
                    {
                        books.map((book)=>{
                            return <div className="row manage-row">
                                <div className="col-4">{book.name}</div>
                                <div className="col-4">{book.author}</div>
                                <div className="col-2">${book.price}</div>
                                <div className="col-2"><button onClick={()=>handleRemoveBook(book._id)} style={{border:0}}><img width="25px" src={Delete} alt="" /></button></div>
                            </div>
                        })
                    }
                
            </div>
        </div>
    );
};

export default ManageBook;