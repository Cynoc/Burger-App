import React from 'react';

import classses from './Logo.css';
import burgerLogo from '../../assets/Images/burger-logo.png';

const logo = (props) =>(

    <div className={classses.Logo}>
        <img src={burgerLogo} alt="Burger Logo"/>
    </div>
);

export default logo;