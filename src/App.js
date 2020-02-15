import React from 'react';
import Header from './components/layout/Header';
import Number from './components/Number';
import Result from './components/Result';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [
        {
          id: 1,
          number: 10,
          checked: false
        },
        {
          id: 2,
          number: 2,
          checked: false
        },
        {
          id: 3,
          number: 5,
          checked: false
        },

    ],
      result: ''
    };
  }

  onClick = button => {
    // this.setState({result: 0})
    this.state.numbers.map(number => {
      if(number.checked){
        if (button === "+"){
          this.setState({result: (this.state.result += number.number)})
        } else if (button === "-"){
          this.setState({result: (this.state.result -= number.number)})
        } else if (button === "*"){
          this.setState({result: (this.state.result *= number.number)})
        } 
        else if (button === "/"){
          this.setState({result: (this.state.result /= number.number)})
        }
      }
    })
  }

  togleChecked = (id) => {
    this.setState({ numbers: this.state.numbers.map(number => {
      if (number.id === id) {
        if (this.state.result === ''){
          this.setState({result: number.number})
        }
        number.checked = !number.checked
      }
      return number;
    })})
  }

  addNumber = (id, e) => {
    this.setState({ numbers: this.state.numbers.map(number => {
      if (number.id === id) {
        number.number = e.target.value
      }
      return number;
    })})
  }

  reset = () => {
    this.setState({result: ''})
  }
  
  render(){
    return (
      <div className="container">
        <Header />
        <br />
        <form style={{ width: '400px', margin: '100px auto 10px' }}>
          <Number addNumber={this.addNumber} togleChecked={this.togleChecked} numbers={this.state.numbers} onClick={this.onClick} />
          
        </form>
          <div style={{ width: '400px', margin: '30px auto 10px' }}>
            <button className="col-md-3" name="+" onClick={e => this.onClick(e.target.name)}> + </button>
            <button className="col-md-3" name="-" onClick={e => this.onClick(e.target.name)}> - </button>
            <button className="col-md-3" name="*" onClick={e => this.onClick(e.target.name)}> * </button>
            <button className="col-md-3" name="/" onClick={e => this.onClick(e.target.name)}> / </button>
          </div>
          <div style={{ width: '400px', margin: '30px auto 10px' }}>
            <button onClick={this.reset}>Reset</button>
          </div>
          <Result result={this.state.result} />
        <br />
      </div>
    );
  }
}

export default App;