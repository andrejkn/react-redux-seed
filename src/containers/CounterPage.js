import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/user';
import Radium from 'radium';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/counter';

function mapStateToProps(state) {
  return {
    counter: state.counter.get('count'),
    user: state.user.get('username'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(CounterActions.increment()),
    decrement: () => dispatch(CounterActions.decrement()),
    logout: () => dispatch(logoutUser()),
  };
}

class CounterApp extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
  };

  render() {
    const {
      counter,
      increment,
      decrement,
      logout,
    } = this.props;

    return (
      <div>
        <h1 style={ styles.base }>Counter</h1>
        <hr />
        <Counter
          counter={ counter }
          increment={ increment }
          decrement={ decrement }
          reset={ reset }
        />
        <button type="button" onClick={ logout }>Logout</button>
      </div>
    );
  }
}

const styles = {
  base: {
    color: 'blue',
    fontFamily: 'Arial',
  },
};

export default Radium(
  connect(mapStateToProps, mapDispatchToProps)(CounterApp)
);
