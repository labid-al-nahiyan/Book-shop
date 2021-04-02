import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    return (
        <div className="header container-fluid">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="header-title ">
                    <h1>It's A Library</h1>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <ul className="header-nav">
                        <Link to='/home'><li>Home</li></Link>
                        <Link to='/orders'><li>Orders</li></Link>
                        <Link to='/admin'><li>Admin</li></Link>
                        <Link to='/deals'><li>Deals</li></Link>
                        {loggedInUser.name?<li id="login">{loggedInUser.name}</li>:<Link to='/login'><li id="login">Login</li></Link>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;