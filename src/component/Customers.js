import React,{Component} from "react";
import axios from "axios";

// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {Button} from 'reactstrap';
// import CustomerDetails from ' ./CustomerDetails';
import CustomerDetails from "./CustomerDetails";

class Customers extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedCustomer : 1
        }
    }
    componentDidMount(){
        this.getCustomerData();
    }

    getCustomerData(){
        axios.get('http://localhost:3000/products').then(response =>{
            this.setState({customerList : response})
        })
    };

    render(){
        if(this.state.customerList)
        return (<p>Loading</p>)
        return( 
            <div className = "addmargin">
                <div className = "col-md-3">
                    {
                        this.state.customerList.data.map(customer => 
                        // <Panel bsStyle ="info" key ={customer.name} className = "centeralign">
                        //     <Panel.Heading>
                        //     <Panel.Title componentClass = "h3">{customer.name}</Panel.Title>
                        //     </Panel.Heading>
                        //     <Panel.Body>
                        //         <p>{customer.name}</p>
                        //         <Button bsStyle = "info" onClick ={()=> this.setState({selectedCustomer : customer.id})}>
                        //             Click 
                        //         </Button>
                        //     </Panel.Body>
                        // </Panel>
                        <div></div>
                        )
                    }
                </div>
                <div className ="col-md-6">
                    <CustomersDetails val = {this.state.selectedCustomer}/>
                </div>
            </div>
        )
    }
}

export default Customers;