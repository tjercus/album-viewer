import React from "react";
import { push } from "connected-react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import FilterForm from "../filters";

const List = ({ albums, isFiltering, changePage }) => (
  <article>
    <div style={isFiltering ? { display: "block" } : { display: "none" }}>
      filtering ...
    </div>
    <h1>Albums</h1>
    <FilterForm />
    <ul>
      {albums.map(album => (
        <li
          key={album.id}
          style={album.display ? { display: "block" } : { display: "none" }}
        >
          {album.name}
        </li>
      ))}
    </ul>
  </article>
);

const mapStateToProps = state => {
  console.log("MSTP", state);
  return {
    albums: state.listReducer.albums,
    isFiltering: state.listReducer.isFiltering
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
