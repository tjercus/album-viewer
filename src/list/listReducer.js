import { FILTER_REQUESTED } from "../constants";

const initialState = {
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

export default (state = initialState, action) => {
  if (action.type === FILTER_REQUESTED) {
    return {
      ...state,
      isFiltering: true
    };
  } else {
    return state;
  }
};

