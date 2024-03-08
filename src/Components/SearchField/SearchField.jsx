import style from "./SearchField.module.scss";

export const SearchField = ({ setSearch }) => {
  return (
    <search className={style.search}>
      <label htmlFor="search">
        <input
          type="search"
          name="search"
          placeholder="Søg på affald..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </label>
    </search>
  );
};
