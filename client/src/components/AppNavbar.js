import React, { Component } from 'react';
import NavBarButtons from './NavBarButtons';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Container,
	Button
} from 'reactstrap';

class AppNavbar extends Component {

	state = {
		isOpen: false,
	}

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<div>
				<Navbar color="dark" dark expand="sm" className="mb-5">
					<Container>
						<NavbarBrand href="/"> opreaWeb</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<NavBarButtons />
						</Collapse>
					</Container>
				</Navbar>
			</div>
		);
	}
}
export default AppNavbar