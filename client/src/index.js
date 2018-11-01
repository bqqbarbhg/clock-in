import React from 'react'
import ReactDOM from 'react-dom'

class HelloMessage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: '...' }
  }

  async componentDidMount() {
    const response = await fetch('/api/message')
    const text = await response.text()
    this.setState({ ...this.state, message: text })
  }

  render() {
    return (
      <h1>{this.state.message}</h1>
    );
  }
}

ReactDOM.render(
  (<div><HelloMessage /></div>),
  document.getElementById('root')
);

