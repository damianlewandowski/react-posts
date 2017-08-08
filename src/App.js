import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

let NormalView = (props) => {
  return (
    <div>
      <p>{props.msg}</p><br />
      <button onClick={props.handleView} className="btn btn-primary">Edit</button>
      <button onClick={props.handleDelete} className="btn btn-danger">Delete</button>
    </div>
  )
}

let EditView = (props) => {
  return (
    <div>
      <textarea defaultValue={props.msg} onChange={props.handleSave}></textarea><br />
      <button onClick={props.handleView} className="btn btn-success">Save</button>
    </div>
  )
}

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderPost: true,
      normalView: true,
      message: props.initialMessage,
    };
  }

  handleView() {
    this.setState({
      normalView: !this.state.normalView,
    });
  }

  handleSave(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleDelete() {
    this.setState({
      renderPost: false,
    })
  }

  render() {
    if(this.state.normalView && this.state.renderPost) {
      return this.state.renderPost ?
        <div className="Post">
          <NormalView msg={this.state.message} handleDelete={this.handleDelete.bind(this)} handleView={this.handleView.bind(this)} />
        </div>               :
        null
    }
    return this.state.renderPost ?
      <div className="Post">
        <EditView msg={this.state.message} handleSave={this.handleSave.bind(this)} handleView={this.handleView.bind(this)} />
      </div>               :
      null
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Post initialMessage="First initial message" />
          <Post initialMessage="Second initial message" />
          <Post initialMessage="Third initial messag" />
          <Post initialMessage="Fourth initial message" />
        </div>
      </div>
    );
  }
}

export default App;
