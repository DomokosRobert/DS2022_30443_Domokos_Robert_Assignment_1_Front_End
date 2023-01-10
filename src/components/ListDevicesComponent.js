import React, { Component } from 'react';
import DeviceService from '../services/DeviceService';

class ListDevicesComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            devices:[]
        }
        this.addDevice = this.addDevice.bind(this);
        this.editDevice = this.editDevice.bind(this);
        this.deleteDevice = this.deleteDevice.bind(this);
        this.backToMain = this.backToMain.bind(this);
    }
    deleteDevice(id){
        DeviceService.deleteDevice(id).then((res)=>{
            this.setState({devices: this.state.devices.filter(devices => devices.id !== id)});
        });
    }
    componentDidMount(){
        DeviceService.getDevices().then(
            (res) => {this.setState({devices: res.data});
            });
    }
    addDevice(){
        this.props.history.push('/add-device');
    }
    editDevice(id){
        this.props.history.push(`/update-device/${id}`);
    }
    backToMain(){
        this.props.history.push('/admin');
    }
    render() {
        return (
            <div>
                <h2 className ="text-center">Devices List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addDevice}> Add Device</button>
                    <button className="btn btn-primary" onClick={this.backToMain}> Back to main page</button>
                </div>
                <div className = "row">
                    <table className= "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Device Id</th>
                                <th> Device Description</th>
                                <th> Device Address</th>
                                <th> Device Consumption/h</th>
                                <th> Device Owner</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.devices.map(
                                    device =>
                                    <tr key ={device.id}>
                                        <td>{device.id}</td>
                                        <td>{device.description}</td>
                                        <td>{device.address}</td>
                                        <td>{device.maxHourlyConsumption}</td>
                                        <td>{device.customer.name}</td>
                                        <td>
                                            <button onClick = {()=> this.editDevice(device.id)} className = "btn btn-info" >Update</button>
                                            <button style={{marginLeft: "10px"}} onClick = {()=> this.deleteDevice(device.id)} className = "btn btn-danger" >Delete</button>
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

export default ListDevicesComponent;