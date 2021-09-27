import React from 'react'
import PropTypes from 'prop-types';
import { Box, Card, CardContent, Grid, Icon, IconButton, Typography } from '@mui/material';

function Animal({ animal, toggleStarred }) {
  return (
    <Box mb={2}>
      <Card>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={8}>
              <Typography variant="h6">{animal.name}</Typography> 
              <Typography variant="subtitle1">{animal.taxonomy.scientificName}</Typography> 
            </Grid>
            <Grid item xs={3}>
              { animal.image && <img src={animal.image} alt="avatar" height="75"/> }
            </Grid>
            <Grid item xs={1} alignSelf="flex-start">
              <IconButton onClick={toggleStarred}>
                { animal.starred ? <Icon color="primary ">star</Icon> : <Icon>star_border</Icon> }
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  )
}

Animal.propTypes = {
  animal: PropTypes.shape({
    id: PropTypes.string.isRequired,
    starred: PropTypes.bool.isRequired,
    taxonomy: PropTypes.shape({
      family: PropTypes.string.isRequired,
      scientificName: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
  toggleStarred: PropTypes.func.isRequired
};

export default Animal
