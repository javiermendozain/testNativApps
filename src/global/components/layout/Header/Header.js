// Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';

//  Assets
import logo from '../../../assets/logos/youtube.png';
import iconYoutube from '../../../assets/logos/iconYoutube.png';

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
                            <p className='title'> {item.name} </p>
                        </div>
                        </NavLink>
                    </li>
                </ul>);
    });

    return (
        <header className="header">
            <img src={logo} className="logo" alt="logo" />
           
            <nav  className="navbar navbar-expand-lg ">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <img src={iconYoutube} alt=''/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {menuHTML}
                    </div>
                </div>
            </nav>
        </header>
  );

}


export default Header;
