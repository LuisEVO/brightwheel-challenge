import { Alert, Button, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Results from '../components/Results'
import { searchSelector } from '../store/selectors/search.selector'

function FavoritesPage() {
  const history = useHistory();
  const {favorites} = useSelector(searchSelector)

  return (
    <Fragment>
      <Typography variant="h2" sx={{ color: 'white', textAlign: 'center' }}>My Favorites</Typography>

      <Button onClick={() => history.push("/")}>Go Back</Button>

      <Results data={favorites} />
      { !favorites?.length && <Alert severity="info">You have not selected a favorite yet!</Alert> }

    </Fragment>
  )
}

export default FavoritesPage
