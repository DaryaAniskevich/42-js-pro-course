import React from "react";
import style from "./Clicker.module.css";

class Clicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }

  decrement() {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  }

  reset() {
    this.setState({
      count: 0,
    });
  }

  render() {
    return (
      <div className={style.clicker}>
        <div className={style.counter}>{this.state.count}</div>
        <div className={style.buttons}>
          <div
            onClick={this.increment}
            className={style.btn + " " + style.btnIncrement}
          ></div>
          <div
            onClick={this.reset}
            className={style.btn + " " + style.btnReset}
          ></div>
          <div
            onClick={this.decrement}
            className={style.btn + " " + style.btnDecrement}
          ></div>
        </div>
      </div>
    );
  }
}

export default Clicker;
