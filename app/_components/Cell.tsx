import * as React from "react";

const Cell = ({ children }: { children: React.ReactNode }) => {
  return <div className="cell">{children}</div>;
};
export default Cell;
