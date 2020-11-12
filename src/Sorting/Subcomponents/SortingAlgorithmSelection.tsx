import React from "react";

import { Row, Button } from "handsome-ui";
import { Sort } from "../../App/types";

interface Props {
  activeSortingAlgorithm: Sort;
  setSortingAlgorithm: (algorithm: Sort) => void;
}

const SortingAlgorithmSelection = (props: Props) => {
  const _getSortingAlgorithmChunks = (): Array<Array<Sort>> => {
    const chunks = [];
    let currentChunk: Array<Sort> = [];
    Object.keys(Sort).forEach((key, i) => {
      if (i > 0 && i % 4 === 0) {
        chunks.push(currentChunk);
        currentChunk = [];
      }
      currentChunk.push(Sort[key as keyof typeof Sort]);
    });
    chunks.push(currentChunk);

    return chunks;
  };

  const { setSortingAlgorithm, activeSortingAlgorithm } = props;

  return (
    <div className="sorting_selection-container">
      {_getSortingAlgorithmChunks().map((algorithmRow) => (
        <Row>
          {algorithmRow.map((algorithm) => (
            <Button
              className="sorting_selection-option"
              title={algorithm}
              onClick={() => setSortingAlgorithm(algorithm)}
              disabled={activeSortingAlgorithm === algorithm}
            />
          ))}
        </Row>
      ))}
    </div>
  );
};

export default SortingAlgorithmSelection;
