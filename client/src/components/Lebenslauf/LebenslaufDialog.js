import React, { Component } from 'react';
import { lebenslauf } from '../../actions/itemActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import data from './data'
import bildungdata from './bildungdata'
import Table from './Table'
import Contact from './Contact'
import Bildungsweg from './Bildungsweg'

class LebenslaufDialog extends Component {
    componentDidMount() {
		this.props.lebenslauf();
	}
    render() {
        return (
            <div>
                <Contact />
                <Table data={data} /> 
                <Bildungsweg bildungdata = {bildungdata}/>
            </div>
        );
    }
}

LebenslaufDialog.propTypes = {
	lebenslauf : PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    defaultState: state
});

export default connect(mapStateToProps, { lebenslauf })(LebenslaufDialog);
