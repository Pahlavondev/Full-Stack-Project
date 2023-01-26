import React from "react";

const Loader = () => {
  return (
    <div className="spinner-border text-dark d-block mx-auto" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Loader;
