import axios from "../../axios";
import { GET_NOTES } from '../types';

export const getNotes = () => async dispatch => {
  try {
    const res = await axios.get("/notes")
    dispatch({
      type: GET_NOTES,
      payload: res.data
    })
  } catch (err) {
    console.log(err.message)
  }
}