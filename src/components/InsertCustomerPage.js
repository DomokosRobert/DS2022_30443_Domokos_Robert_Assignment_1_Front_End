import React, { Component } from 'react';
import CustomerService from './services/CustomerService';

class InsertCustomerPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            username: '',
            password: '',
            role: 'customer'
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveCustomer = this.saveCustomer.bind(this);
    }
    saveCustomer = (e) =>{
        e.preventDefault();
        let customer = {name: this.state.name, email: this.state.email, username: this.state.username, password: this.state.password, role: this.state.role};
        console.log('customer =>' + JSON.stringify(customer));
        CustomerService.insertCustomer(customer).then(res =>{
            this.props.history.push('/customers');
        });
    }
    changeNameHandler=(event)=>{
        this.setState({name: event.target.value});
    }
    changeEmailHandler=(event)=>{
        this.setState({email: event.target.value});
    }
    changeUsernameHandler=(event)=>{
        this.setState({username: event.target.value});
    }
    changePasswordHandler=(event)=>{
        this.setState({password: event.target.value});
    }
    cancel(){
        this.props.history.push('/customers');
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Add Customer</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>Name: </label>
                                        <input placeholder='Name' name='name' className='form-control'
                                            value={this.state.name} onChange ={this.changeNameHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Email: </label>
                                        <input placeholder='Email' name='email' className='form-control'
                                            value={this.state.email} onChange ={this.changeEmailHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Username: </label>
                                        <input placeholder='Username' name='username' className='form-control'
                                            value={this.state.username} onChange ={this.changeUsernameHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Password: </label>
                                        <input type="password" placeholder='Password' name='password' className='form-control'
                                            value={this.state.password} onChange ={this.changePasswordHandler}/>
                                    </div>
                                    <button className='btn btn-success' onClick={this.saveCustomer}>Save</button>
                                    <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        );
    }
}

export default InsertCustomerPage;