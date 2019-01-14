import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getHelperDetails } from '../store/actions/actionCreator';

class HelperList extends Component {
    componentWillMount = () => {
        this.props.dispatch(getHelperDetails())
    }
  render() {
      const { helpers } = this.props;
    return (
      <div>
        {
            helpers && helpers.map(helper => <p>{helper.name}</p>)
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        helpers: state.helpers
    }
}

export default connect(mapStateToProps)(HelperList)
