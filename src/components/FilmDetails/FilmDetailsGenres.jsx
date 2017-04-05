import React, { PropTypes } from 'react';

const propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

const FilmDetailsGenres = ({ id, name }) => {
  console.log('genre ',id, name)
  return (
    <p key={ id }>
      { name }
    </p>
  )
}

FilmDetailsGenres.propTypes = propTypes;

export default FilmDetailsGenres;