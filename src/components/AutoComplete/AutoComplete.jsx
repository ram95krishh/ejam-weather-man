import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';

import './AutoComplete.css';

const AutoComplete = ({ handleChange, options, selected }) => (
  <Autocomplete
    getOptionLabel={option => option.name}
    multiple
    name="cities"
    onChange={handleChange}
    options={options}
    renderInput={params => (
      <TextField
        {...params}
        label="Cities"
        name="city"
        variant="standard"
      />
    )}
    styleName="autoComplete"
    value={selected}
  />
);

AutoComplete.propTypes = {
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      zip: PropTypes.string,
    }),
  ).isRequired,
  selected: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      zip: PropTypes.string,
    }),
  ).isRequired,
};

export default AutoComplete;
