import { FILTER_REQUESTED, FILTERED } from "./constants";

export const filterAsync = () => (dispatch) => {
  dispatch({
    type: FILTER_REQUESTED,
  });

  return setTimeout(() => {
    dispatch({
      type: FILTERED,
    });
  }, 1000);
};
