import React from 'react'
import PropTypes from 'prop-types';
import { Box, Card, CardContent, Grid, Icon, IconButton, Typography } from '@mui/material';

function Company({ company, toggleStarred }) {
  return (
    <Box mb={2}>
      <Card>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={8}>
              <Typography variant="h6">{company.name}</Typography> 
              <Typography variant="subtitle1">{company.description}</Typography> 
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle2">{company.address.address1}</Typography> 
              { company.address.address2 && <Typography variant="subtitle2">{company.address.address2}</Typography> }
              <Typography variant="subtitle2">{company.address.state}</Typography> 
            </Grid>
            <Grid item xs={1} alignSelf="flex-start">
              <IconButton onClick={toggleStarred}>
                { company.starred ? <Icon color="primary ">star</Icon> : <Icon>star_border</Icon> }
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  )
}

Company.propTypes = {
  company: PropTypes.shape({
    id: PropTypes.string.isRequired,
    starred: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    address: PropTypes.shape({
      address1: PropTypes.string.isRequired,
      address2: PropTypes.string,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      postalCode: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  toggleStarred: PropTypes.func.isRequired
};

export default Company
