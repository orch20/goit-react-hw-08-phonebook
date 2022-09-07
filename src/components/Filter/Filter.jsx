import { FilterInput } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onFilterChange = event => {
    const action = setFilter(event.target.value);
    dispatch(action);
  };

  return (
    <label>
      Search contacts:
      <br />
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </label>
  );
};
