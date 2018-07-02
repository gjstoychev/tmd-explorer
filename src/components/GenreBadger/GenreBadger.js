import React from 'react'
import PropTypes from 'prop-types'

import Badge from '../Badge'
import formatGenre from '../../scripts/formatGenre'

const GenreBadger = ({ids, genres, loosy}) => {
  if (!ids || !genres) {
    return null
  }

  return (
    <h6>
      {ids.map((id, key) => {
        let style = {margin: '2px'}

        if (loosy) {
          style = {margin: '20px'}
        }

        return (
          <Badge key={key} style={style}>
            {formatGenre(id, genres)}
          </Badge>
        )}
      )}
    </h6>
  )
}

GenreBadger.propTypes = {
  ids: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
  loosy: PropTypes.bool
}

export default GenreBadger