import React from 'react';
import headerImg from '../img/Jubreel_Adebayo.jpeg';

function Header() {
    return (
        <div className="header">
            <img src={headerImg} alt="" className="header__img" />
        </div>
    )
}

export default Header;