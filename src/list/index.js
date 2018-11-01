import React from "react";
import { push } from "connected-react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const List = ({ albums, changePage }) => (
  <div>
    <h1>Albums</h1>
    <ul>{albums.map(album => <li key={album.id}>{album.name}</li>)}</ul>
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
      changePage: () => push("/edit")
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
