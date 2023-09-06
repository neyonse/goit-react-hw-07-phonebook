import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { LuSearch } from 'react-icons/lu';

export function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

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
