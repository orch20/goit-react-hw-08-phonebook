import PropTypes from 'prop-types';
import {FilterInput} from './Filter.styled'

export const Filter = ({ onFilterChange, value }) => { 
    return (
        <label>
        Search contacts:
        <br />
      <FilterInput
        type="text"
        name="filter"
        value={value}
        onChange={onFilterChange}
        />
    </label>
  );
    
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};