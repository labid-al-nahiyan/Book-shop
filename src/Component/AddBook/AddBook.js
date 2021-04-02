import axios from 'axios';
import React, { useState } from 'react';
import './AddBook.css'

const AddBook = () => {
    const [books, setBooks] = useState({
        name: '',
        author: '',
        img: '',
        price: ''
    })
    const addBook = () => {
        fetch('https://shrouded-oasis-92850.herokuapp.com/addBooks', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(books)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    const handleChange = (event) => {
        let newBook = {};
        newBook = { ...books }
        console.log(event.target.name, event.target.value)
        newBook[event.target.name] = event.target.value;
        console.log(newBook)
        setBooks(newBook)

    }
    const handleImageUpload = event => {
        const imgData = new FormData();
        imgData.set('key', 'db302a015e2744baa113f6efacad2c64')
        imgData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(data => {
                console.log(data.data.data.display_url);
                const imgLink = data.data.data.display_url
                let newBook = {};
                newBook = { ...books, img: imgLink }
                console.log(newBook)
                setBooks(newBook)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h3 className="add-title">Add Book</h3>
            <hr/>
            <div>
                <div className="container  add-form">
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="name">Book Name</label>
                            <br/>
                            <input onBlur={handleChange} type="text" name="name" placeholder="Enter Name" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="author">Author Name</label>
                            <br/>
                            <input onBlur={handleChange} type="text" name="author" placeholder="Enter Author Name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="price">Book Price</label>
                            <br/>
                            <input onBlur={handleChange} type="text" name="price" placeholder="Enter Price" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="Add Book Cover Photo"></label>
                            <br/>
                            <input type="file" name="img" onChange={handleImageUpload} placeholder="" />
                        </div>
                    </div>
                </div>
                <button className="add-btn" onClick={addBook}>Submit</button>
            </div>
        </div>
    );
};

export default AddBook;