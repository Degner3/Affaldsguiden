import style from "./TrashCat.module.scss";
import BG from "../../assets/Images/Layout/bg-waves-1.svg";
import { useFetch } from "../../Hooks/useFetch";
import { SectionCard } from "../../Components/SectionCard/SectionCard";
import { SearchField } from "../../Components/SearchField/SearchField";
import { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";

export const TrashCat = () => {

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    if (search === "") {
      setSearchResult(null);
      return;
    }

    let url = `http://localhost:3000/search/${search}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSearchResult(data));
  }, [search]);

  const { data: sorting, loading, error } = useFetch("http://localhost:3000/section?incl_categories=true&incl_types=true&sort_key=title");
  // console.log("data", sorting);

  if (loading) {
    return <Loader/>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className={style.trashStyle}>
      <div className={style.contentWrapper}>
        <h3>
          Din guide
          <br />
          <span>til en sund affaldssortering</span>
        </h3>
        <SearchField setSearch={setSearch} />
        <div className={style.cardGrid}>
          {searchResult && searchResult.data && searchResult.data.length > 0 ? (
            searchResult.data.map((item, i) => (
              <SectionCard
                key={i}
                id={item.id}
                imgSrc={item.filepath}
                filename={item.filename}
                title={item.title}
                color={`#${item.color}`}
              />
            ))
          ) : (
            sorting?.map((item, i) => (
              <SectionCard
                key={i}
                id={item.id}
                imgSrc={item.filepath}
                filename={item.filename}
                title={item.title}
                color={`#${item.color}`}
              />
            ))
          )}
        </div>
      </div>
      <img className={style.bg} src={BG} alt="bg waves" />
    </section>
  );
};