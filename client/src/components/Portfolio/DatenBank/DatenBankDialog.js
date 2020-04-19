import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../../../actions/itemActions';
import AddItemDialog from './AddItemDialog';
import PropTypes from 'prop-types';

class DatenBankDB extends Component {
	componentDidMount() {
		this.props.getItems();
	}

	onDeleteClick = (_id) => {
		this.props.deleteItem(_id);
	}

	render() {
		const { items } = this.props.item;
		return (
			<Container>
				<ListGroup>
					<TransitionGroup className="DatenBankMongoDB">
						{items.map(({ _id, name }) => (
							<CSSTransition key={_id} timeout={500}>
								<ListGroupItem>
									<Button
										className="remove-btn"
										color="danger"
										size="sm"
										onClick={this.onDeleteClick.bind(this, _id)}
									>
										&times;
										</Button>
									{name}
								</ListGroupItem>
							</CSSTransition> 
							)
						)}
					</TransitionGroup>
				</ListGroup>
				<AddItemDialog />
			</Container>
		);
	}
}

DatenBankDB.propTypes = {
	getItems: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(DatenBankDB);
