import React, { Component } from 'react';
import CustomerService from './services/CustomerService';

class LoginPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            customer: {}
        }
        
    this.addCustomer = this.addCustomer.bind(this);     
    this.enterPassword = this.enterPassword.bind(this);
    this.enterUsername = this.enterUsername.bind(this);
    this.submitCustomer = this.submitCustomer.bind(this);
    this.start = this.start.bind(this);
        
    }

    enterUsername = (event) =>{
        this.setState({username: event.target.value});
    }
    enterPassword = (event) =>{
        this.setState({password: event.target.value});
    }
    addCustomer(){
        this.props.history.push(`/register`);
    }
    submitCustomer = (e) =>{
        e.preventDefault();
        let user = {username: this.state.username, password: this.state.password, customer: this.state.customer};
        
        if(user.username ==="admin")
        {
            if(user.password ==="admin")
                {
                    this.props.history.push('/admin');
                }
                else
                {
                    this.props.history.push('/failed');
                }
        }
        else{
            if(this.state.username){
                CustomerService.getCustomerByUsername(this.state.username).then((res) => {
                    this.setState({customer: res.data})
                });
                let databaseCustomer = this.state.customer;
                console.log('customer =>' + JSON.stringify(databaseCustomer));
                if(databaseCustomer){
                    if(user.password === databaseCustomer.password)
                    {
                        this.props.history.push(`/client-page/${databaseCustomer.id}`);
                    }
                    else
                    {
                        this.props.history.push('/failed');
                    }
                }
                
            }
            
            
        }
    }
    
    start = (e) =>{
        e.preventDefault();
        let user = {username: this.state.username, password: this.state.password, customer: this.state.customer};
        
        if(user.username ==="admin")
        {
            if(user.password ==="admin")
                {
                    this.props.history.push('/');
                }
                else
                {
                    this.props.history.push('/failed');
                }
        }
        else{
            if(this.state.username){
                CustomerService.getCustomerByUsername(this.state.username).then((res) => {
                    this.setState({customer: res.data})
                });
                let databaseCustomer = this.state.customer;
                console.log('customer =>' + JSON.stringify(databaseCustomer));
                if(databaseCustomer){
                    ///if(user.password === databaseCustomer.password)
                    ///{
                    ///    this.props.history.push('/client-page');
                    ///}
                    ///else
                    ///{
                    ///    this.props.history.push('/failed');
                    ///}
                }
            }
        }
    }
    render() {
        return (
            <div>
                <div className='Auth-form-container'>
                    <form className='Auth-form'>
                        <div className='Auth-form-content'>
                            <h3 className='Auth-form-title'>Sign In</h3>
                            <div className='form-group mt-3'>
                                <label>Username</label>
                                <input type="text" className='form-control mt-1' placeholder='Enter username'
                                value={this.state.username} onChange={this.enterUsername}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Password</label>
                                <input type="password" className='form-control mt-1' placeholder='Enter password'
                                value={this.state.password} onChange={this.enterPassword}/>
                            </div>
                            <div className="d-grid gap-2 mt-3">
                            <button className="btn btn-primary" onClick={this.start}>
                                Press before submit so I can get your info
                            </button>
                              <button type="submit" className="btn btn-primary" onClick={this.submitCustomer}>
                                Submit
                              </button>
                              <button type="submit" className="btn btn-info" onClick={this.addCustomer}>
                                Register
                              </button>
                            </div>
                        </div>
                    </form>                   
                </div>
            </div>
        );
    }
}

export default LoginPage;