import { Fragment, useEffect } from "react";
// import { customCursor } from "./utils";
const Mouse = () => {
  //   useEffect(() => {
  //     customCursor();
  //   }, []);

  return (
    <Fragment>
      <div className="mouse-cursor cursor-outer" />
      <div className="mouse-cursor cursor-inner" />
    </Fragment>
  );
};
export default Mouse;
