import React, {Component} from 'react';
import SectionDetails from './SectionDetails'
import axios from 'axios'
export default class Customers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedId: 0,
      isShowPanel: false
    }
  }

  componentDidMount() {
    this.getCustomerData();
  }

  getCustomerData() {
    axios.get('http://localhost:3001/sections').then(response => {
      console.log(response)
      this.setState({sections: response})
    })
  };

  render() {
    const style = {
      "fontWeight": "bold",
      "border": "1px solid #000",
      "borderRadius": "4px",
      "backgroundColor": "#b5bdca",
      "padding": "8px 12px",
      "margin": "10px 0"
    }
    const styleHeader = {
      "fontWeight": "bold",
      "border": "1px solid #000",
      "borderRadius": "4px",
      "backgroundColor": "#d9edf7",
      "padding": "8px 12px",
      "margin": "10px 0"
    }
    if (!this.state.sections)
      return (<p>Loading data</p>)
    return (<div className="addmargin">
      {
        !this.state.isShowPanel ? 
      <div className="col-md-6">
        <div style={styleHeader}>
          Title
        </div>
        {
          this.state.sections.data.map(section => 
          <div style={style} key={section.id} onClick={() => this.setState({selectedId: section.id, isShowPanel: true})}>
            { section.name }
          </div>)
        }
      </div> : null
      }
      {this.state.isShowPanel ? 
      <div className="col-md-6">
        <div style={styleHeader} onClick={() => this.setState({isShowPanel: false})}>Back</div>
        <SectionDetails val={this.state.selectedId}/>
      </div> : null
      }
    </div>)
  }

}
