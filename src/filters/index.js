import React from "react";
import { push } from "connected-react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { filterAsync } from "../actions";

const FilterForm = ({ albums, filterAsync, changePage }) => (
  <div>
    <input type="text" placeholder="searchword ..." />
    <p>
      <button onClick={filterAsync}>Filter Async</button>
    </p>
  </div>
);

const mapStateToProps = state => {
  console.log("MSTP", state);
  return {
    albums: state.listReducer.albums
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      filterAsync
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterForm);
