import React from "react";
import ReactDOM from "react-dom";


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(6).fill(Array(7).fill(null))
    }
  }
  renderCol(i) {
    return <Col value={i} />;
  }
  render() {
    console.table(this.state.squares)
    return (
      <div>
        <h1>Connect 4</h1>
        <div className="Board">
          {this.renderCol(0)}
          {this.renderCol(1)}
          {this.renderCol(2)}
          {this.renderCol(3)}
          {this.renderCol(4)}
          {this.renderCol(5)}
          {this.renderCol(6)}
        </div>
      </div>
    )
  }
}

class Col extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCell(i, j){
    return <Square column={i} row={j} />;
  }
  render() {
    return (
    <div className="Col" onClick={()=> {alert('now change the cell color')}}>
    {this.props.value}
      {this.renderCell(this.props.value, 0)}
      {this.renderCell(this.props.value, 1)}
      {this.renderCell(this.props.value, 2)}
      {this.renderCell(this.props.value, 3)}
      {this.renderCell(this.props.value, 4)}
      {this.renderCell(this.props.value, 5)}
    </div>)
  }
}

// let playerColor = {
//   color: 'lavender'
// } <------ doesn't

class Square extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      player: 0,
      color: 'lavender'
    }
  }
  //render according to player, according to row


  // togglePlayer() {
  //   if(this.state.player === 'Player 1') {
  //     this.setState({player: 'Player 2', color: 'black'})
  //   } else {
  //     this.setState({player: 'Player 1', color: 'white'})
  //   }
  // }

  
  render() {
    return (
    <div className="Square">
      {this.props.column}  {this.props.row}
    </div>
    )
  }
}


ReactDOM.render(<Board />, document.getElementById("index"));