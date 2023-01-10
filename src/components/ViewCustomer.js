import React, { Component } from 'react';
import CustomerService from '../services/CustomerService';

class ViewCustomer extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            customer: {}
        }
    }
    componentDidMount(){
        CustomerService.getCustomerById(this.state.id).then(res => {
            this.setState({customer: res.data});
        });
    }
    render() {
        return (
            <div>
                <div className = "card col-md-6 offset-md-3">
                   <h3 className='text-center'>Customer password: </h3>
                   <div>{this.state.customer.password} </div>                     
                </div>
            </div>
        );
    }
}

export default ViewCustomer;