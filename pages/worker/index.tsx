import React, { Component } from 'react';

const defaultState = {
  num: 1,
  result: -1
}

function fibonacci (num: number) {
  if (num === 1 || num === 2) {
    return num
  }

  return fibonacci(num - 2) + fibonacci(num - 1)
}

export default class extends Component<{}, typeof defaultState> {
  constructor(props) {
    super(props);
    this.state = defaultState
  }

  public worker: Worker

  componentDidMount() {
    this.worker = new Worker('http://localhost:3000/fibonacci-worker.js');
    this.worker.addEventListener('message', this.onWorkerMessage);
  }

  numChanged (evt): void {
    const num = parseInt(evt.target.value)
    this.setState({ num  })
  }

  componentWillUnmount() {
    this.worker.terminate();
    this.worker = null
  }

  onWorkerMessage = (event) => {
    console.log('Host received:', event.data)
    this.setState({
      result: event.data
    })
  };

  asyncCalculate () {
    this.worker.postMessage({cmd: 'start', data: this.state.num });
  }

  syncCalculate () {
    this.setState({result: fibonacci(this.state.num)})
  }

  render() {
    return (
      <>
        <input value={this.state.num} type="number" onChange={this.numChanged.bind(this)}/>
        <button type="button" onClick={this.asyncCalculate.bind(this)}>async Calculate</button>
        <button type="button" onClick={this.syncCalculate.bind(this)}>sync Calculate</button>
        <p>the result is: {this.state.result}</p>
        <button onClick={() => alert('this is a test message')}>test blocking</button>

        <p>
          当 num &gt; 44 时，采用 sync 方式明显卡顿，worker 异步明显不卡顿
        </p>
      </>
    )
  }
}