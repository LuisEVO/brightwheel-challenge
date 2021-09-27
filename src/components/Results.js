import React from 'react'
import PropTypes from 'prop-types';
import Animal from './Animal'
import Company from './Company'
import Product from './Product'
import { useDispatch } from 'react-redux';
import { toggleStarredItem } from '../store/actions/search.actions';

function Results({ data }) {
  const dispatch = useDispatch()

  const toggleStarred = (item) => {
    dispatch(toggleStarredItem(item))
  }

  return (
    <div>
      {
        data.map(item => {
          switch(item.type) {
            case 'product':
              return <Product key={item.id} product={item} toggleStarred={() => toggleStarred(item)}/>
            case 'animal':
              return <Animal key={item.id} animal={item} toggleStarred={() => toggleStarred(item)}/>
            default:
              return <Company key={item.id} company={item} toggleStarred={() => toggleStarred(item)}/>
          }
        })
      }
    </div>
  )
}

Results.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
}

export default Results
