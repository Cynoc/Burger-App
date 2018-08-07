import React from 'react';

import classses from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) =>(
    <header className={classses.Toolbar}>
        <DrawerToggle Clicked={props.open} />
        <div className={classses.Logo}>
        <Logo/>
        </div>
        <nav className={classses.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;