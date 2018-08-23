import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkOutSummary = (props) => {
    return (
        <div className={classes.checkOutSummary}>
            <h1> Enjoy your Burger</h1>
            <div style={{width:'100px',margin:'auto', textAlign:'center'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
            btnType="Danger" 
            clicked={props.checkoutCancelled}>  CANCEL </Button>
            <Button
             btnType="Success"
             clicked={props.checkoutContinued}>  PROCEED </Button>
            </div>
    );

}

export default checkOutSummary;