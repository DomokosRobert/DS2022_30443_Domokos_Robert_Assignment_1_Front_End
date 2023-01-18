import React, { Component } from 'react';
import DeviceService from './services/DeviceService';
import CustomerService from './services/CustomerService';

class UpdateDevicePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: '',
            address: '',
            maxHourlyConsumption: '',
            customer: {
                id: '',
                name: '',
                email: '',
                username: '',
                password: '',
                role: 'customer'
            }
        }
        this.updateDevice = this.updateDevice.bind(this);
    }

    componentDidMount(){
        DeviceService.getDeviceById(this.state.id).then( (res) => {
            let device = res.data;
            this.setState({description: device.description,address: device.address,maxHourlyConsumption: device.maxHourlyConsumption, customer: device.customer});
        });
    }
    updateDevice = (e) =>{
        e.preventDefault();
        let device = {description: this.state.description,address: this.state.address,maxHourlyConsumption: this.state.maxHourlyConsumption, customer: this.state.customer};
        console.log('device => ' + JSON.stringify(device));
        DeviceService.updateDevice(device, this.state.id).then( (res) =>{
            this.props.history.push('/devices');
        });
        
    }
    changeDescriptionHandler=(event)=>{
        this.setState({description: event.target.value});
    }
    changeAddressHandler=(event)=>{
        this.setState({address: event.target.value});
    }
    changeConsumptionHandler=(event)=>{
        this.setState({maxHourlyConsumption: event.target.value});
    }
    changeCustomerHandler=(event)=>{
        CustomerService.getCustomerById(event.target.value).then((res)=>{
            let customerGot = res.data;
            this.setState({customer: {id: customerGot.id,name: customerGot.name, email: customerGot.email,username: customerGot.username, password: customerGot.password, role: customerGot.role}});
        });
        
    }
    cancel(){
        this.props.history.push('/devices');
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Update Device</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>Description: </label>
                                        <input placeholder='Description' name='description' className='form-control'
                                            value={this.state.description} onChange ={this.changeDescriptionHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Address: </label>
                                        <input placeholder='Address' name='address' className='form-control'
                                            value={this.state.address} onChange ={this.changeAddressHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Consumption: </label>
                                        <input placeholder='Consumption' name='maxHourlyConsumption' className='form-control'
                                            value={this.state.maxHourlyConsumption} onChange ={this.changeConsumptionHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label>CustomerId: </label>
                                        <input placeholder='Customer' name='customer' className='form-control'
                                            value={this.state.customer.id} onChange ={this.changeCustomerHandler}/>
                                    </div>
                                    <button className='btn btn-success' onClick={this.updateDevice}>Update</button>
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

export default UpdateDevicePage;