import React from "react";
import { push } from "connected-react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { filterAsync } from "../actions";

const List = ({ albums, filterAsync, changePage }) => (
  <div>
    <h1>Albums</h1>

    <ul>{albums.map(album => <li key={album.id}>{album.name}</li>)}</ul>

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

// const mapStateToProps = ({ albums }) => ({
//   list: albums.list,
//   isFiltering: albums.isFiltering,
// });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      filterAsync,
      changePage: () => push("/edit")
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
