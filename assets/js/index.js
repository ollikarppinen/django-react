var React = require('react')
var ReactDOM = require('react-dom')

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello!",
      items: []
    };
  }

  handleClick(event) {
    this.setState({
      items: this.state.items.concat(this.state.text),
      text: ""
    })
  }

  render() {
    return (
      <div>
        <Hello />
        <input type="text" value={this.state.text}
          onChange={event => this.setState({text: event.target.value})}
        />
        <button onClick={::this.handleClick} >Add</button>
        <ul>
          {this.state.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    );
  }
}

const Hello = () => (
  <h1>Here we come!</h1>
);

ReactDOM.render(<App />, document.getElementById('react-app'))
