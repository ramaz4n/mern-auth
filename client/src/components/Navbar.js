import React, { useContext } from 'react';
import {NavLink, useNavigate} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';


function Navbar(props) {
	const auth = useContext(AuthContext)
	const navigate = useNavigate()

	const logoutHandler = event => {
		event.preventDefault()
		auth.logout()
		navigate('/')
	}

	return (
		<nav>
    		<div className="nav-wrapper">
      		<span className="brand-logo">Сокращение ссылок</span>
      		<ul id="nav-mobile" className="right hide-on-med-and-down">
        			<li><NavLink to="/create">Создать</NavLink></li>
        			<li><NavLink to="/links">Ссылки</NavLink></li>
        			<li><a href="/" onClick={logoutHandler}>Выйти</a></li>
      		</ul>
    		</div>
  		</nav>
	);
}

export default Navbar;