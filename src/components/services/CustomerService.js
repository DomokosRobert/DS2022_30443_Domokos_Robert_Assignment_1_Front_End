import axios from 'axios';
//import InsertCustomerPage from '../components/InsertCustomerPage';

const CUSTOMER_API_BASE_URL = "http://localhost:8080/customers";
class CustomerService{

        getCustomers(){
            return axios.get(CUSTOMER_API_BASE_URL);
        }
        insertCustomer(customer){
            return axios.post(CUSTOMER_API_BASE_URL, customer);
        }
        getCustomerById(customerId){
            return axios.get(CUSTOMER_API_BASE_URL + '/' + customerId);
        }
        updateCustomer(customer, customerId){
            return axios.put(CUSTOMER_API_BASE_URL + '/' + customerId, customer);
        } 
        deleteCustomer(customerId){
            return axios.delete(CUSTOMER_API_BASE_URL + '/' + customerId);
        }
        getCustomerByUsername(username){
            return axios.get(CUSTOMER_API_BASE_URL + '/username=' + username);
        }
}       

export default new CustomerService()