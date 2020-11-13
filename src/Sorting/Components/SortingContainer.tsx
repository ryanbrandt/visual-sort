import React, { useState, useEffect } from "react";
import { Sort } from "../../App/types";
import SortingAlgorithmSelection from "../Subcomponents/SortingAlgorithmSelection";
import Chart from "../Subcomponents/Chart";

const SortingContainer = () => {
  const _generateRandomValues = (): Array<number> => {
    return Array.from({ length: 10 }, () => Math.floor(Math.random() * 1000));
  };

  const [algorithm, setSortingAlgorithm] = useState<Sort>(Sort.heap);
  const [data, setData] = useState(_generateRandomValues());

  return (
    <div className="sorting_container">
      <SortingAlgorithmSelection
        activeSortingAlgorithm={algorithm}
        setSortingAlgorithm={setSortingAlgorithm}
      />
      <Chart data={data} setData={setData} />
    </div>
  );
};

export default SortingContainer;
