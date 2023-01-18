import React, { Component } from 'react';
import CustomerService from './services/CustomerService';

class ListUsersComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            customers:[]
        }
        this.addCustomer = this.addCustomer.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
        this.viewCustomer = this.viewCustomer.bind(this);
        this.backToMain = this.backToMain.bind(this);
    }
    viewCustomer(id){
        this.props.history.push(`/view-customer-password/${id}`);
    }
    deleteCustomer(id){
        CustomerService.deleteCustomer(id).then((res)=>{
            this.setState({customers: this.state.customers.filter(customer => customer.id !== id)});
        });
    }
    backToMain(){
        this.props.history.push('/admin');
    }
    componentDidMount(){
        CustomerService.getCustomers().then(
            (res) => {this.setState({customers: res.data});
            });
    }
    addCustomer(){
        this.props.history.push('/add-customer');
    }
    editCustomer(id){
        this.props.history.push(`/update-customer/${id}`);
    }
    render() {
        return (
            <div>
                <h2 className ="text-center">Customers List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addCustomer}> Add Customer</button>
                    <button className="btn btn-primary" onClick={this.backToMain}> Back to main page</button>
                </div>
                <div className = "row">
                    <table className= "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Customer Id</th>
                                <th> Customer Name</th>
                                <th> Customer Email</th>
                                <th> Customer Username</th>
                                <th> Customer Role</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.customers.filter(customer => customer.role==="customer").map(
                                    customer =>
                                    <tr key ={customer.id}>
                                        <td>{customer.id}</td>
                                        <td>{customer.name}</td>
                                        <td>{customer.email}</td>
                                        <td>{customer.username}</td>
                                        <td>{customer.role}</td>
                                        <td>
                                            <button onClick = {()=> this.editCustomer(customer.id)} className = "btn btn-info" >Update</button>
                                            <button style={{marginLeft: "10px"}} onClick = {()=> this.deleteCustomer(customer.id)} className = "btn btn-danger" >Delete</button>
                                            <button style={{marginLeft: "10px"}} onClick = {()=> this.viewCustomer(customer.id)} className = "btn btn-info" >View Password</button>
                                        </td>
                                        
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListUsersComponent;