import React, { useState } from "react";
import { Sort } from "../../App/types";
import SortingAlgorithmSelection from "../Subcomponents/SortingAlgorithmSelection";
import ChartContainer from "./ChartContainer";

const SortingContainer = () => {
  const [algorithm, setSortingAlgorithm] = useState<Sort>(Sort.heap);

  return (
    <div className="sorting_container">
      <SortingAlgorithmSelection
        activeSortingAlgorithm={algorithm}
        setSortingAlgorithm={setSortingAlgorithm}
      />
      <ChartContainer />
    </div>
  );
};

export default SortingContainer;
