import React from "react";
import { push } from "connected-react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { doFilter } from "../actions";

const FilterForm = ({ searchWord, doFilter }) => {
  let input = null;
  return (
    <div>
      <input
        ref={node => {
          input = node;
        }}
        type="text"
        placeholder="searchword ..."
        name="searchwordfield"
        value={searchWord}
      />
      <p>
        <button onClick={() => doFilter(input.value)}>Filter Async</button>
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("FilterForm MSTP", state);
  return {
    searchWord: state.listReducer.searchWord
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      doFilter
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterForm);
