import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.searchBox}>
      <label htmlFor="search">Find contacts by name</label>
      <input type="text" id="search" onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
