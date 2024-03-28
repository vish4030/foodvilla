import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { useContext } from 'react';


import logo from '../../assets/images/logo.png';
import {CartIcon} from "../../constant.js";
import "./Header.css";
import UserContext from '../../utils/UserContext';


const Header = () => {

  const {user} = useContext(UserContext);
  const cartItem = useSelector(state=>state.cart.total);


  return (
    <div className='header' >
        <div className='container'>
          <div className='row justify-space-bet align-center'>
            <div className='col-3 logo'> 
               <img src={logo} alt='logo' />
            </div>
            <div className='col-6'>
              <ul className="flex flex-row gap-4">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/cart"><CartIcon /> <span>{cartItem}</span></Link>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header;