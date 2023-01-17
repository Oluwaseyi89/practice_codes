// import { useContext } from 'react';
// import {cartContext} from '../App';
import { Link } from 'react-router-dom';
import './styles/header.css';

// const {bask} = useContext(cartContext);


const Header = ({bask, prevBask}) => {
    return (
       <div className="navbar">
        <div className="brandlogo">
            <img alt="company logo" className="translogo"src="translogo.png"/>
        </div>
               <div className="headcon" >
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/about">About</Link></div>
                    <div><Link to="/services">Our Services</Link></div>
                    <div><Link to="/products">Our Products</Link></div>
                    <div> <Link to="/register" >Subscribe for Voucher</Link></div>
                    <div> <Link to="/careers">Careers</Link> </div>
                    <div id="cart">
                        <p>{bask}</p>                                   
                    </div>
                    <div className="iconImg">
                        <Link to="/login">
                            <img alt="user icon" className="uIcon" src="usericon.png" />
                        </Link>
                    </div>
                </div>
            </div>
    )
}

export default Header