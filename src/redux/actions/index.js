import axios from "axios";

export const fetch = (filter) => async (dispatch, getState) => {
  dispatch({ type: "FETCH_POST_REQUEST" });
  try {
    const response = await axios.get(filter);
    dispatch({ type: "FETCH_POST_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_POST_FAILURE", error });
  }
};

export const saveItemData = (itemData) => async (dispatch, getState) => {
  try {
    const serializedState = JSON.stringify(itemData);
    localStorage.setItem("itemState", serializedState);
  } catch (error) {
    //catching error
  }
};
