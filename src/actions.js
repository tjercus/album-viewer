import { FILTER_REQUESTED, FILTERED } from "./constants";

export const doFilter = searchWord => dispatch => {
  console.log("doFilter", searchWord);
  dispatch({
    type: FILTER_REQUESTED,
    payload: searchWord
  });

  return setTimeout(() => {
    dispatch({
      type: FILTERED
    });
  }, 3000);
};
