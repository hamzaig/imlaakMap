import React from 'react';
import classes from "./search.module.css";

const Search = () => {
  return <div className={classes.searchDiv}>
    <form action="#">
      <div className={classes.search}>
        <input type="text" name="" id="" />
      </div>
      <div className={classes.categories}>
        <select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className={classes.types}>
        <select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className={classes.buttons}>
        <button>thi</button>
        <button type="submit">Search</button>
      </div>
    </form>
  </div>;
};

export default Search;
