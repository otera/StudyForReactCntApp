import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <div>カウント値 : {this.props.value}</div>
        <div>
          <button onClick={this.props.increment}>+</button>
          <button onClick={this.props.decrement}>-</button>
        </div>
      </React.Fragment>
    );
  }
}

//reduxで管理しているState情報をPropsで扱えるようにする
const mapStateToProps = state => ({ value : state.count.value});

//Action関数をPropsで扱えるようにする
const mapDispatchToProps = ({increment, decrement});

//componentとRedux Storeを接続する
export default connect(mapStateToProps, mapDispatchToProps)(Counter);