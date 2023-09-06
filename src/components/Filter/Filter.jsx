import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import { LuSearch } from 'react-icons/lu';

export function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);

  const handleChange = e => {
    const { value } = e.currentTarget;

    dispatch(setFilter(value));
  };

  return (
    <div className={css.filter}>
      <i className={css.searchIcon} aria-hidden="true">
        <LuSearch />
      </i>
      <input
        className={css.input}
        id="search"
        type="search"
        placeholder="Search by name"
        value={filterValue}
        onChange={handleChange}
      />
    </div>
  );
}
