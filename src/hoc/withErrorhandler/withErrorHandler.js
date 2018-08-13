import React, { Component } from 'react';

import Aux from '../Auxillary/Auxillary';
import Modal from '../../components/UI/Modal/Modal'
const withErrorHander = (WrappedComponent, axios) =>{
        return class extends Component{
            state = {
                error: null
            }
            componentWillMount () {
                this.resInterceptors = axios.interceptors.response.use(res => res, error =>{
                    this.setState({error:error});
                });
                axios.interceptors.request.use(request =>{
                    this.reqInterceptors = this.setState({error:null});
                        return request;
                }) ;
        }  

        componentWillUnmount(){
            axios.interceptors.response.eject(this.resInterceptors);
            axios.interceptors.request.eject(this.reqInterceptors);
        }

        errorComfirmedHandler = () =>{
            this.setState({error:null});
        }
        render(){
            return (
                <Aux>
                <Modal 
                    show={this.state.error}
                    modalClosed={this.errorComfirmedHandler}>
                    {this.state.error ? this.state.error.message:null}
                </Modal>
            <WrappedComponent {...this.props}/>
            </Aux>
  
            )
        }
    } 
}

export default withErrorHander;