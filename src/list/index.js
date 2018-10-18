import React from "react";
import { push } from "connected-react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { filterAsync } from "../filterActions";

const List = props => (
  <div>
    <h1>Albums</h1>

    <p>
      <button onClick={props.decrement}>Decrementing</button>
      <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
        Decrement Async
      </button>
    </p>

    <p>
      <button onClick={() => props.changePage()}>
        Go to other page via redux
      </button>
    </p>
  </div>
);

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    increment,
    incrementAsync,
    decrement,
    decrementAsync,
    changePage: () => push("/edit"),
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
