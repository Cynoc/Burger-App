import React, {Component} from 'react';

import axios from '../../axios-order';
import Order from '../Order/Order';
import withErrorHandler from '../../hoc/withErrorhandler/withErrorHandler';

class Orders extends Component{
    state= {
        orders:[],
        loading:true
    }
    componentDidMount(){
        axios.get('/orders.json')
        .then(res => {
            let fetchData = [];
            for(let key in res.data){
                fetchData.push({...res.data[key],
                    id: key})
                }
                this.setState({loading:false, orders: fetchData});
        }).catch(error =>{

        })
    }
    render(){
        return(
            <div>
                {this.state.orders.map(order =>(
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}/>
                ))}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);