import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import axios from 'axios'
export default class SectionDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMore: true
    }
  }

  componentDidMount() {
    this.getSectionDetails(this.props.val)
  }

  componentDidUpdate(prevProps) {
    if (this.props.val !== prevProps.val) {
      this.getSectionDetails(this.props.val)
    }
  }

  getSectionDetails(id) {
    axios.get('http://localhost:3001/sections/' + id).then(response => {
      this.setState({sectionDetails: response.data})
    })
  };

  render() {
    const styleMore = {
      fontWeight: 600,
      color: "#000"
    }
    if (!this.state.sectionDetails)
      return (<p>Loading Data</p>)
    return (<div className="customerdetails">
      <Panel bsStyle="info" className="centeralign">
        <Panel.Heading>
          <Panel.Title componentClass="h3">{this.state.sectionDetails.name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          {this.state.sectionDetails.des}
          {this.state.isMore ? 
            <div onClick={() => this.setState({isMore: false})} style={styleMore}>More</div> :
            <div>
              <p>{this.state.sectionDetails.name}</p>
              <p>{this.state.sectionDetails.images}</p>
            </div>
          }
        </Panel.Body>
      </Panel>
    </div>)
  }
}
