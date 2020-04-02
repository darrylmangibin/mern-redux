import { GET_NOTES } from '../types'

const initialState = {
  items: [],
  loading: true
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
    case GET_NOTES:
      return {
        ...state,
        items: payload,
        loading: false
      }
		default:
			return state;
	}
};
