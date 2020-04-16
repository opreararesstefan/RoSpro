import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Description extends Component {
    constructor() {
        super()
        this.state = {
            isHidden: true
        }
    }

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    DescriptionTable = () => {
        return (
            <ul >
                <li > {this.props.index}</li>
            </ul>
        )
    }

    render() {
        return (
            <div >
                <Button onClick={this.toggleHidden.bind(this)} >
                    Details
                </Button>
                {!this.state.isHidden && this.DescriptionTable()}
            </div>

        );
    }
}


export default Description;