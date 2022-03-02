import '../../estilos/components/layout/Header.css'

import React from 'react';
const Header = (props) => {
    return (
        <header>
        <div className='holderheader'>
            <img src="img/logo.png" width="130" alt="transporte" />
            <h1>Transporte X</h1>
        </div>
    </header>
    
        
    );
}

export default Header;