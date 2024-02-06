import React from "react";

const Loader = () => {
  return (
    <div className="d-flex spinner justify-content-center p-5">
      <div className="spinner-border" role="status">
        <span className="visually-hidden"></span>
      </div>
    </div>
  );
};

export default Loader;
