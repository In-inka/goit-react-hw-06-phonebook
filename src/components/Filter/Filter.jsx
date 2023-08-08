import PropTypes from 'prop-types';

import { Form, Label, Name } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter, getFilter } from 'redux/FilterSlice';

const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onChangeFilter = evt => {
    dispatch(setStatusFilter(evt.target.value));
  };
  return (
    <Form>
      <Label>Find contacts by name </Label>
      <Name
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
      />
    </Form>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
};

export default Filter;
