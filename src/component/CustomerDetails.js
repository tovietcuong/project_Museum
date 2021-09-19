import React, { Component } from "react";
// import {Panel} from 'react-bootstrap';
import axios from "axios";
import Panel from 'react-bootstrap/lib/Panel'



class CustomerDetails extends Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }
    componentDidMount(){
        this.getCustomerDetails(this.props.val)
    }
    getCustomerDetails(id){
        axios.get('http://localhost:3000/products/'+ id).then(response =>{
            this.setState({customerDetails : response})
        })
    };
    render(){
        if(!this.state.customerDetails)
            return (<p>Loading</p>);
        return(
            <div className= "customerDetails">
                <Panel bsStyle ="info" className = "centeralign" >
                    <Panel.Heading>
                        <Panel.Title componentClass = "h3">{customer.name}</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <p>{customer.name}</p>
                        <p>{customer.price_1}</p>
                        <p>{customer.price_2}</p>
                        <p>{customer.des}</p>
                    </Panel.Body>
                </Panel>

            </div>
        )
    }

}
export default CustomerDetails;