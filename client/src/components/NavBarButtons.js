import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { contact, portfolio, lebenslauf } from '../actions/itemActions';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	Container,
	Button
} from 'reactstrap';

function NavBarButtons() {
  const navBarTab = useSelector(state => state.navBarReducer);
  const dispatch = useDispatch();
  return (
    <Nav className="ml-auto" navbar>
      <NavItem>
        <Button onClick={() => dispatch(contact())}>Contact</Button>
      </NavItem>
      <NavItem>
        <Button onClick={() => dispatch(lebenslauf())}>Lebenslauf</Button>
      </NavItem>
      <NavItem>
        <Button onClick={() => dispatch(portfolio())}>Portfolio</Button>
      </NavItem>
    </Nav>
  );
}

export default NavBarButtons;