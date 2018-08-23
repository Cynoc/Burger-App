import React, {Component} from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component{
    state={
        name:'',
        email:'',
        address:{
            street:'',
            postalCode:''
        },
        loading: false
    }

    orderClickedHandler = (event) =>{
        event.preventDefault();
        console.log('this is '+ this.props.totalPrice)
        this.setState({loading:true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer:{
                name:'Cynoc Bediako',
                address:{
                    street: 'TestStreet 1',
                    zipCode: '14853',
                    country: 'Ghana'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
            }
        axios.post('/orders.json', order)
        .then(response => {
            this.setState({loading:false});
            this.props.history.push('/');
        })
        .catch(error => 
            this.setState({loading:false}));
 
    }

    render(){
        let form = (
            <form>
            <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
            <input className={classes.Input} type="email" name="email" placeholder="Your Mail" />
            <input className={classes.Input} type="text" name="street" placeholder="Street address" />
            <input className={classes.Input} type="text" name="postalCode" placeholder="Postal Code" />
            <Button btnType="Success" clicked={this.orderClickedHandler}>Order</Button>
        </form>
        );
        if(this.state.loading){
            form = <Spinner />
        }
        return(
            <div className={classes.ContactData}>
                <h4 style={{ color:'blue'}}>Enter your contact information</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;