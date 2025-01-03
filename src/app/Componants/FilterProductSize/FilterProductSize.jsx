import React from "react";

const FillterProductSize = ({size}) => {
  return (
    <div className="space-y-2">
      <h1 className="text-xl"> Filter</h1>
      <p>{size} Products</p>
    </div>
  );
};

export default FillterProductSize;
