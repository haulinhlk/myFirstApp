import { ADD_PLACE, DELETE_PLACE } from "../actions/actionTypes";

const initialState = {
  places: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: [
          ...state.places,
          {
            key: `${Math.random()}`,
            name: action.placeName,
            image: {
              uri: "https://www.reduceimages.com/img/image-after.jpg"
            }
          }
        ]
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== state.selectedPlace.key;
        })
      };
    default:
      return state;
  }
};

export default reducer;
