import React from "react";
import { push } from "connected-react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { filterAsync } from "../actions";

const state = {
  albums: [{
    nr: 1,
    name: "Rikki en Wiske in Chocowakije",
    release: "30-03-1945"
  }, {
    nr: 2,
    name: "Het Eiland Amoras",
    release: "29-12-1945"
  }]
};

const List = props => (
  <div>
    <h1>Albums</h1>

    <ul>
    {props.albums.map(album =>
      <li>{album.name}</li>
    )}
    </ul>

    <p>
      <button onClick={props.filterAsync}>
        Filter Async
      </button>
    </p>
  </div>
);

const mapStateToProps = state => ({
  albums: state.albums
});

// const mapStateToProps = ({ albums }) => ({
//   list: albums.list,
//   isFiltering: albums.isFiltering,
// });

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    filterAsync,
    changePage: () => push("/edit"),
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
