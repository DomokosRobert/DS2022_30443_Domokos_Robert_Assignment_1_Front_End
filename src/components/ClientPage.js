import React, { Component } from 'react';
import DeviceService from '../services/DeviceService';
import SockJsClient from 'react-stomp';

const SOCKET_URL = 'http://localhost:8080/websocket';

class ClientPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            devices:[],
            sendingMessage:
            { 
                message: '',
                customerId: ''
            }
        }
        this.backToMain = this.backToMain.bind(this);
    }
    componentDidMount(){
        DeviceService.getDevicesByCustomer(this.state.id).then(res => {
            this.setState({devices: res.data});
        });
    }
    backToMain(){
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <SockJsClient
                    url={SOCKET_URL}
                    topics={['/topic/message']}
                    onConnected={console.log("Connected!")}
                    onDisconnect={console.log("Disconnected!")}
                    onMessage={msg => {
                        this.setState({sendingMessage:{message: msg.message,customerId: msg.customerId}});
                        if(this.state.id !== msg.customerId){
                            console.log("Different!")
                            this.setState({sendingMessage: {message: '', customerId: msg.customerId}})
                        }
                    }
            }
                    debug={false}
                />
                <h2 className ="text-center">My Devices</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.backToMain}> Log Out</button>
                </div>
                <div className = "row">
                    <table className= "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Device Description</th>
                                <th> Device Address</th>
                                <th> Device Max Consumption/h</th>
                                <th> Device Current Consumption</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.devices.map(
                                    device =>
                                    <tr key ={device.id}>
                                        <td>{device.description}</td>
                                        <td>{device.address}</td>
                                        <td>{device.maxHourlyConsumption}</td>
                                        <td>{device.currentConsumption}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div>
                    {
                        this.state.sendingMessage.message
                    }
                </div>
            </div>
        );
    }
}

export default ClientPage;