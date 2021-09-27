import axios from "axios"
import searchTypes from "../types/search.types"

export const loadFavorites = () => {
  return (dispatch) => {
    axios.get(`http://localhost:3001/search/?starred=true`)
    .then(res => dispatch(updateFavorites(res.data)))
  }
}

export const toggleStarredItem = (item) => {
  return (dispatch) => {
    axios.patch(`http://localhost:3001/search/${item.id}`, { starred: !item.starred })
    .then(res => dispatch(updateItem(res.data, !item.starred)))
  }
}

export const search = (query) => {
  return (dispatch) => {
    dispatch(searchLoading)

    axios.get(`http://localhost:3001/search?_limit=10&q=${query}`)
    .then(res => dispatch(searchSuccess(res.data)))
    .catch(error => dispatch(searchError(error)))
  }
}

export const searchLoading = {
  type: searchTypes.loading
}

export const searchSuccess = (data) => {
  return {
    type: searchTypes.success,
    payload: { data }
  }
}

export const searchError = (error) => {
  return {
    type: searchTypes.error,
    payload: { error }
  }
}

export const updateItem = (item, addToFavorite) => {
  return {
    type: searchTypes.updateItem,
    payload: { item, addToFavorite }
  }
}

export const updateFavorites = (favorites) => {
  return {
    type: searchTypes.updateFavorites,
    payload: { favorites }
  }
}