import React from "react";

interface LineProps {
  margin: number;
}

const Line: React.FC<LineProps> = ({ margin }) => {
  return <hr style={{ width: "100%", margin: margin ? `${margin} 0` : 0 }} />;
};

export default Line;
