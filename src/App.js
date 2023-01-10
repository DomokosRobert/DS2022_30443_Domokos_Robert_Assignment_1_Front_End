import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListUsersComponent from './components/ListUsersComponent';
import InsertCustomerPage from './components/InsertCustomerPage';
import UpdateCustomerPage from './components/UpdateCustomerPage';
import ViewCustomer from './components/ViewCustomer';
import IndexComponent from './components/IndexComponent';
import ListDevicesComponent from './components/ListDevicesComponent';
import UpdateDevicePage from './components/UpdateDevice';
import InsertDevicePage from './components/InsertDevice';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import FailPage from './components/FailPage';
import ClientPage from './components/ClientPage';


function App() {

  return (
    <div>
      <Router>
          <HeaderComponent/>
            <div className="container">
                <Switch>
                  <Route path ="/" exact component = {LoginPage}></Route>
                  <Route path ="/admin" component = {IndexComponent}></Route>
                  <Route path ="/customers" component = {ListUsersComponent}></Route>
                  <Route path ="/devices" component = {ListDevicesComponent}></Route>
                  <Route path ="/add-customer" component = {InsertCustomerPage}></Route>
                  <Route path ="/add-device" component = {InsertDevicePage}></Route>
                  <Route path ="/update-customer/:id" component = {UpdateCustomerPage}></Route>
                  <Route path ="/update-device/:id" component = {UpdateDevicePage}></Route>
                  <Route path ="/view-customer-password/:id" component = {ViewCustomer}></Route>
                  <Route path ="/register" component = {RegisterPage}></Route>
                  <Route path ="/failed" component = {FailPage}></Route>
                  <Route path ="/client-page/:id" component = {ClientPage}></Route>
                </Switch>
            </div>
          <FooterComponent/>
      </Router>
    </div>
    
  );
}

export default App;
