import React, { Component } from 'react';

import Aux from '../Auxillary/Auxillary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    SideDrawerToggleHandler = () => {

        this.setState((prevState) =>{
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }
    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }
    render(){
        return (
            <Aux>
            <Toolbar
                open={this.SideDrawerToggleHandler}
                />
            <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
            </Aux>
            
        );
    }
}

export default Layout;