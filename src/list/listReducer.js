import { FILTER_REQUESTED, FILTERED } from "../constants";

const initialState = {
  albums: [
    {
      nr: 1,
      name: "Rikki en Wiske in Chocowakije",
      release: "30-03-1945",
      display: true
    },
    {
      nr: 2,
      name: "Het Eiland Amoras",
      release: "29-12-1945",
      display: true
    }
  ],
  isFiltering: false
};

export default (state = initialState, action) => {
  if (action.type === FILTER_REQUESTED) {
    console.log("filter requested");
    // action.payload = searchWord
    const nextAlbums = state.albums.map(
      album =>
        album.name.contains(action.payload)
          ? (album.display = true)
          : (album.display = false)
    );

    state.albums = nextAlbums;

    console.log("STATE", state);

    return {
      ...state,
      isFiltering: true
    };
  } else if (action.type === FILTERED) {
    return {
      ...state,
      isFiltering: false
    };
  } else {
    return state;
  }
};
