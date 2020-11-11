import React, { Component } from 'react';
import DatenBankDialog from './DatenBank/DatenBankDialog';
import SnakeGameDialog from './SnakeGame/SnakeGameDialog';
import TreeJsBoxDialog from './ThreeJsBox/ThreeJsBoxDialog';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';

class PortfolioDialog extends Component {

    state = {
        actualState: 2
    }

    compo = () => {
        switch (this.state.actualState) {
            case 0:
                return <DatenBankDialog />
            case 1:
                return <SnakeGameDialog />
            case 2:
                return <TreeJsBoxDialog />
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
                                onClick={() => this.setState({ actualState: 2, })}
                            >Univers</Button>
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
                                href="https://github.com/opreararesstefan/Recongnize_Text_Console" target="blank"
                            >C# Project </Button>
                            <Button
                                className="secondary"
                                size="sm"
                                href="https://github.com/opreararesstefan" target="blank"
                            >Github Repositories</Button>
                            <Button
                                className="secondary"
                                size="sm"
                                href="http://opreararesstefan.github.io" target="blank"
                            >Alte Projekte</Button>
                        </ListGroupItem>
                    </ListGroup>
                </Container>
                <div> {this.compo()} </div>
            </div>
        );
    }
}

export default PortfolioDialog;
