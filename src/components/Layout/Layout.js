import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import Properties from "../Properties/Properties";
import FilterProperties from "./FilterProperties";
import { Fragment } from "react";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
    // <Fragment>
    //   <div className={classes.container}>
    //     <FilterProperties />
    //   </div>
    //   {/* <Properties /> */}
    // </Fragment>
  );
};

export default Layout;
