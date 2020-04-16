import React, { Component } from 'react';
import { lebenslauf } from '../actions/itemActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class LebenslaufDialog extends Component {
    componentDidMount() {
		this.props.lebenslauf();
	}
    render() {
        return (
            <div>
                LEBENSLAUF LebenslaufDialog
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
