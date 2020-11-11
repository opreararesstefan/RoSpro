import React, { useState } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Container,
} from 'reactstrap';
import { useDispatch } from 'react-redux'
import { contact, portfolio, lebenslauf } from '../actions/itemActions';
import {
	Nav,
	NavItem,
	Button
} from 'reactstrap';


function AppNavbar(props) {

	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const dispatch = useDispatch();
	return (
		<div>
			<Navbar color="dark" dark expand="sm" className="mb-5">
				<Container>
					<NavbarBrand href="/"> opreaWeb</NavbarBrand>
					<NavbarToggler onClick={toggle} >More</NavbarToggler>
					<Collapse isOpen={isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<Button onClick={function () { dispatch(portfolio()); toggle(); }}>Portfolio</Button>
							</NavItem>
							<NavItem>
								<Button onClick={function () { dispatch(lebenslauf()); toggle(); }}>Lebenslauf</Button>
							</NavItem>
							<NavItem>
								<Button onClick={function () { dispatch(contact()); toggle(); }}>Contact</Button>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		</div>
	);
}


export default AppNavbar