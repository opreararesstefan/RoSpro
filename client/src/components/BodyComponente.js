import React from 'react';
import { useSelector } from 'react-redux'
import ContactDialog from './ContactDialog'
import DatenBankDB from './DatenBankDialog'
import LebenslaufDialog from './LebenslaufDialog'
import { Container } from 'reactstrap';


function BodyComponente() {
  const navBarTab = JSON.stringify(useSelector(state => state.navBarTab)).slice(16).split('"}')
  if (navBarTab.includes('CONTACT')) {
      return (
        <div>
        <Container>
          <ContactDialog/>
        </Container>
        </div>
      )
  }
  else if (navBarTab.includes('LEBENSLAUF')) {
    return (
      <div>
      <Container>
        <LebenslaufDialog/>
      </Container>
      </div>
    )
  }
  else if (navBarTab.includes('PORTFOLIO')) {
    return (
      <div>
      <Container>
        <DatenBankDB/>
      </Container>
      </div>
    )
  }
}

export default BodyComponente;