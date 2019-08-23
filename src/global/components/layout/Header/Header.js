// Dependencies
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

//  Assets
import logo from '../../../assets/logos/youtube.png';
import './header.css';

const Header=()=>{

    const menu = [
        {
            name:'Home',
            path:'/'
        },
        {
            name:'About us',
            path:'/'
        },
        {
            name:'Services',
            path:'/services'
        },
        {
            name:'Success stories',
            path:'/'
        }
    ];

    const menuHTML = menu.map((item, index)=>{
        return (<ul key={index}>
                    <li key={index}>
                        <NavLink to={item.path} exact activeClassName='is-selected' >
                        <div className='content-item'>
                            <span className='title'> {item.name} </span>
                        </div>
                        </NavLink>
                    </li>
                </ul>);
    });

    return (
        <header className="header">
            <img src={logo} className="logo" alt="logo" />
            <nav>
                {menuHTML}
            </nav>
        </header>
  );

}


export default Header;
