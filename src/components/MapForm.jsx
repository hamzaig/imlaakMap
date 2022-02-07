import React from 'react';
import classes from "./mapform.module.css"
import map from "../assets/map.png";

const MapForm = () => {
  return (
    <div className={classes.area} >
      <div className={classes.formDiv}></div>
      <div className={classes.imgIconDiv}>
        <img className={classes.mapImage} src={map} alt='' />
      </div >
    </div >)
};

export default MapForm;
