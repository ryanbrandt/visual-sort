import React from "react";

import { AppContext } from "handsome-ui";

import Bar from "./Bar";

interface Props {
  data: Array<number>;
  setData: (data: Array<number>) => void;
}

const Chart = (props: Props) => {
  const { data } = props;

  return (
    <AppContext.Consumer>
      {(isMobile) => (
        <div>
          <div
            className={
              isMobile
                ? "sorting_chart-container-mobile"
                : "sorting_chart-container"
            }
          >
            {data.map((point, i) => (
              <Bar
                key={`${point}_${i}`}
                value={point}
                active={false}
                maxValue={1000}
              />
            ))}
          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default Chart;
