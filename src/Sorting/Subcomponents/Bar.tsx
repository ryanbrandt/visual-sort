import React from "react";

interface Props {
  active: boolean;
  value: number;
  maxValue: number;
}

const Bar = (props: Props) => {
  const { active, value, maxValue } = props;

  const height = `${(value / maxValue) * 100}%`;
  return (
    <div
      className={`chart_bar${active ? "active-bar" : ""}`}
      style={{ height }}
    />
  );
};

export default Bar;
