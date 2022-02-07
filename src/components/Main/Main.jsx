import React from 'react';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import MapForm from '../MapForm';
import classes from "./main.module.css";

const Main = () => {
  return (
    <main className={classes.main}>
      <BreadCrumb />
      <h3 style={{ margin: "24px 0px" }}>DHA Lahore Map Phase 1 & 2</h3>
      <MapForm />
    </main >
  );
};

export default Main;
