import React, { Component } from 'react';

class IndexComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    
    }
    render() {
        return (
            <div>
                <div className="btn-group mr-2">
                    <button onClick = {()=> this.props.history.push('/customers')} className = "btn btn-info" >Customers</button>
                    <button onClick = {()=> this.props.history.push('/devices')} className = "btn btn-info" >Devices</button>
                    <button onClick = {()=> this.props.history.push('/')} className = "btn btn-info" >Log Out</button>
                </div>
            </div>
        );
    }
}

export default IndexComponent;