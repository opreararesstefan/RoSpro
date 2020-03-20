import React, { Component } from 'react';
import DatenBankDB from './DatenBankDB';
import AddItemDialog from './AddItemDialog';

class DatenBankDialog extends Component {
    render() {
        return (
            <div>
                <DatenBankDB />
                <AddItemDialog />
            </div>
        );
    }
}

export default DatenBankDialog;