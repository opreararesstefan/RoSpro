import React, { Component } from 'react';
import { lebenslauf } from '../actions/itemActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import data from './Lebenslauf/data'
import bildungdata from './Lebenslauf/bildungdata'
import Table from './Lebenslauf/Table'
import Contact from './Lebenslauf/Contact'
import Bildungsweg from './Lebenslauf/Bildungsweg'

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
