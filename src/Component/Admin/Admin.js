import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddBook from '../AddBook/AddBook';
import ManageBook from '../ManageBook/ManageBook';
import './Admin.css'


const Admin = () => {
    
    const [pageState,setPageState]=useState(0)
    
   
    return (
        <div className="container-fluid admin-container">
            <div className="row ">
                
                <div className="col-3 button-side text-center">
                    <h3>Book Shop</h3>
                    <div><button type="button" onClick={()=>setPageState(1)}  className="admin-btn">Manage Book</button></div>
                    <div><button type="button" className="admin-btn" onClick={()=>setPageState(0)}>Add Book</button></div>
                    <div><Link to='/home'><button className="admin-btn">Go to Home</button></Link></div>
                    
                </div>
                <div className="col-9">
                    {pageState===0 && <AddBook></AddBook>}
                    {pageState===1 && <ManageBook></ManageBook>}
                </div>
            </div>
        </div>
    );
};

export default Admin;









