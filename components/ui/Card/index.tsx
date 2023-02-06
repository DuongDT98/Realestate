import React, { FC } from "react";

const Card: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { children, className, ...other } = props;

  return (
    <div className="app-card bg-gray-200" {...other}>
      {children}
    </div>
  );
};

export default Card;
