import React from 'react';
import classes from "./breadcrumb.module.css";

const BreadCrumb = () => {
  return <div className={classes.breadcrumb}>
    <ol>
      <li>Home</li>
      <li>DHA lahore</li>
      <li>DHA Lahore Map Phase 1 & 2</li>
    </ol>
  </div>;
};

export default BreadCrumb;
