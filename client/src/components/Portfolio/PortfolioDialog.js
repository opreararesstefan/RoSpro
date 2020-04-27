import React, { Component } from 'react';
import DatenBankDialog from './DatenBank/DatenBankDialog';
import SnakeGameDialog from './SnakeGame/SnakeGameDialog'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class PortfolioDialog extends Component {
    
    state = {
        actualState: 0
    }

    compo = () => {
        switch (this.state.actualState) {
            case 0:
                return <DatenBankDialog />
            case 1:
                return <SnakeGameDialog />
            default:
                return <DatenBankDialog />
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <ListGroup>
                        <ListGroupItem>
                            <Button
                                className="secondary"
                                size="sm"
                                onClick={() => this.setState({ actualState: 0, })}
                            >DatenBank</Button>
                            <Button
                                className="secondary"
                                size="sm"
                                onClick={() => this.setState({ actualState: 1, })}
                            >SnakeGame</Button>
                            <Button
                                className="secondary"
                                size="sm"
                                href="https://github.com/opreararesstefan" target="blank"
                            >Github Src</Button>
                            <Button
                                className="secondary"
                                size="sm"
                                href="http://opreararesstefan.github.io" target="blank"
                            >AlteProjekte</Button>
                        </ListGroupItem>
                    </ListGroup>
                </Container>
                <div> {this.compo()} </div>
            </div>
        );
    }
}

export default PortfolioDialog;
