import React from 'react'
import PropTypes from 'prop-types';
import { Box, Card, CardContent, Grid, Icon, IconButton, Typography } from '@mui/material';

function Product({ product, toggleStarred }) {
  return (
    <Box mb={2}>
      <Card>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={8}>
              <Typography variant="h6">{product.name}</Typography> 
              <Typography variant="subtitle1">{product.productCategory}</Typography> 
            </Grid>
            <Grid item xs={3}>
              { product.image && <img src={product.image} alt="avatar" height="75"/> }
            </Grid>
            <Grid item xs={1} alignSelf="flex-start">
              <IconButton onClick={toggleStarred}>
                { product.starred ? <Icon color="primary ">star</Icon> : <Icon>star_border</Icon> }
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  )
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    starred: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    productCategory: PropTypes.string.isRequired,
    previewText: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
  toggleStarred: PropTypes.func.isRequired
};

export default Product
