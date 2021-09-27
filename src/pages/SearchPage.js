import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, TextField, Alert, Button } from "@mui/material";
import { loadFavorites, search } from '../store/actions/search.actions';
import { searchSelector } from "../store/selectors/search.selector";
import Results from "../components/Results";
import { useHistory } from "react-router-dom";
import debounce from "lodash.debounce";

const SearchPage = () => {
  const dispatch = useDispatch()
  const history = useHistory();
  const [query, setQuery] = useState('')
  const {loading, data, error, favorites} = useSelector(searchSelector)

  useEffect(() => {
    dispatch(loadFavorites())
  }, [dispatch])

  useEffect(() => {
    dispatch(search(query))
  }, [dispatch, query])

  const changeHandler = event => {
    setQuery(event.target.value);
  };

  const debouncedChangeHandler = useCallback(
    debounce(changeHandler, 500)
  , []);

  return (
    <Fragment>
      <TextField
        sx={{width: '100%', background: 'white', mb: 2 }}
        label="Buscar" variant="outlined"
        onChange={ debouncedChangeHandler } />

      <Button onClick={() => history.push("/favorites")}>{ favorites?.length } favorites</Button>

      <Results data={data} />
      { loading && <CircularProgress /> }
      { error && <Alert severity="error">An error ocurred!</Alert> }
      { !data?.length && <Alert severity="info">no results found for "{query}"!</Alert> }
    </Fragment>
  );
}

export default SearchPage;
