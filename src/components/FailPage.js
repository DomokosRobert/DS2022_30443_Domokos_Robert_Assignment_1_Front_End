import React, { Component } from 'react';

class FailPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            
        }
        this.backToMain=this.backToMain.bind(this);
    }
    backToMain(){
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <div>
                <h2 className ="text-center">Failed Login: Wrong Password</h2>
                <div className="row">
                    <button className="btn btn-info" onClick={this.backToMain}> Back to Login</button>
                </div>
                </div>
            </div>
        );
    }
}

export default FailPage;