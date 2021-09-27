import searchTypes from "../types/search.types";

const initialState = {
  loading: false,
  data: [],
  error: undefined,
  favorites: []
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case searchTypes.loading:
      return {
        ...state,
        loading: true,
        data: [],
        error: undefined
      };
    case searchTypes.success:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: undefined
      };
    case searchTypes.error:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload.error
      };

    case searchTypes.updateItem:
      return {
        ...state,
        data: state.data.map(item => {
          if (item.id === action.payload.item.id) {
            return action.payload.item;
          }
          return item;
        }),
        favorites: action.payload.addToFavorite ?
          state.favorites.concat(action.payload.item) :
          state.favorites.filter(item => item.id !== action.payload.item.id)
      };

    case searchTypes.updateFavorites:
      return {
        ...state,
        favorites: action.payload.favorites,
      };
      
    default:
      return state
  }
}

export default searchReducer;