import React, { Component } from 'react';
import './SnakeGameDialog.css'
import Snake from './Snake'
import Food from './Food'
import { Button, Container } from 'reactstrap'

const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y]
}

const initialState = {
  food: getRandomCoordinates(),
  speed: 90,
  direction: 'DOWN',
  snakeDots: [
    [20, 10],
    [20, 12]
  ],
  gamePaused: true,
}

class SnakeGameDialog extends Component {

  state = initialState;

  componentDidMount() {
    this.actualWindowDimensions();
    setInterval(this.moveSnake, this.state.speed);
    document.onkeydown = this.onKeyDown;
  }

  actualWindowDimensions = () => {
    let actualWidth = window.innerWidth * 0.75;
    let actualHeight = window.innerHeight * 0.75;
    let actualRectangle;
    if (actualWidth > actualHeight) actualRectangle = actualHeight;
    else if (actualHeight > actualWidth) actualRectangle = actualWidth;
    this.setState({ width: actualRectangle, height: actualRectangle });
  };

  componentDidUpdate() {
    this.checkIfOutOfBorders();
    this.checkIfCollapsed();
    this.checkIfEat();
  }

  onKeyDown = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        if(this.state.direction !== 'DOWN')
        this.setState({ direction: 'UP' });
        break;
      case 40:
        if(this.state.direction !== 'UP')
        this.setState({ direction: 'DOWN' });
        break;
      case 37:
        if(this.state.direction !== 'RIGHT')
        this.setState({ direction: 'LEFT' });
        break;
      case 39:
        if(this.state.direction !== 'LEFT')
        this.setState({ direction: 'RIGHT' });
        break;
        default: break;
    }
  }

  moveSnake = () => {
    if (!this.state.gamePaused) {
      let dots = [...this.state.snakeDots];
      let head = dots[dots.length - 1]
      switch (this.state.direction) {
        case 'RIGHT':
          head = [head[0] + 2, head[1]];
          break;
        case 'LEFT':
          head = [head[0] - 2, head[1]];
          break;
        case 'DOWN':
          head = [head[0], head[1] + 2];
          break;
        case 'UP':
          head = [head[0], head[1] - 2];
          break;
          default: break;
      }
      dots.push(head);
      dots.shift();
      this.setState({
        snakeDots: dots
      })
    }
  }

  checkIfOutOfBorders() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      this.onGameOver();
    }
  }

  checkIfCollapsed() {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        this.onGameOver();
      }
    })
  }

  checkIfEat() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let food = this.state.food;
    if (head[0] === food[0] && head[1] === food[1]) {
      this.setState({
        food: getRandomCoordinates()
      })
      this.enlargeSnake();
      this.increaseSpeed();
    }
  }

  enlargeSnake() {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([]);
    this.setState({
      snakeDots: newSnake
    })
  }

  increaseSpeed() {
    if (this.state.speed > 10) {
      this.setState({
        speed: this.state.speed - 15
      })
    }
  }

  onGameOver() {
    alert(`Game Over. Snake Length is ${this.state.snakeDots.length}`)
    this.setState(initialState)
  }

  playPaused() {
    if (this.state.gamePaused)
      return "Play"
    else return "Pause"
  }

  render() {
    return (
      <div>
        <Container>
          <div className="game-area" style={{ width: this.state.width, height: this.state.height }}>
            <Snake snakeDots={this.state.snakeDots} />
            <Food dot={this.state.food} />
          </div>
          <div className="joystick-area">
            <Button className="button" style={{position: 'absolute', left: '20%'}} onClick={() => { this.setState({ gamePaused: !this.state.gamePaused }) }}>{this.playPaused()} </Button>
            <Button className="button" onClick={() => { this.setState({ direction: 'UP' }) }}>UP</Button>
          </div>
          <div className="joystick-area">
            <Button className="button" onClick={() => { this.setState({ direction: 'LEFT' }) }}>LEFT</Button>
            <Button className="button" onClick={() => { this.setState({ direction: 'RIGHT' }) }}>RIGHT</Button>
          </div>
          <div className="joystick-area">
            <Button className="joystick-area" onClick={() => { this.setState({ direction: 'DOWN' }) }}>DOWN</Button>
          </div>
        </Container>
      </div>
    );
  }
}

export default SnakeGameDialog;
