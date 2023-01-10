import axios from 'axios';

const DEVICE_API_BASE_URL = "http://localhost:8080/devices";
class DeviceService{

        getDevices(){
            return axios.get(DEVICE_API_BASE_URL);
        }
        insertDevice(device){
            return axios.post(DEVICE_API_BASE_URL, device);
        }
        getDeviceById(deviceId){
            return axios.get(DEVICE_API_BASE_URL + '/' + deviceId);
        }
        updateDevice(device, deviceId){
            return axios.put(DEVICE_API_BASE_URL + '/' + deviceId, device);
        } 
        deleteDevice(deviceId){
            return axios.delete(DEVICE_API_BASE_URL + '/' + deviceId);
        }
        getDevicesByCustomer(customerId){
            return axios.get("http://localhost:8080/customer/" + customerId + "/devices");
        }
}       

export default new DeviceService()