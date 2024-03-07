import { useState } from "react";
import style from "./SearchField.module.scss";

export const SearchField = () => {

  const [searchData, setSearchData] = useState([]);

  console.log(searchData);

  return (
    <label className={style.searchGroup}>
      <search>
        <input 
        type="search" 
        name="Søg på affald"
        onChange={(e) => setSearchData(e.target.value)}
        />
      </search>
    </label>
  );
};
