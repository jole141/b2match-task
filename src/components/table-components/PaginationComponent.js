import React, { useState, useEffect, useMemo } from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginationComponent = ({
  total,
  itemsPerPage = 11,
  currentPage = 1,
  onPageChange,
}) => {
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (total > 0 && itemsPerPage > 0)
      setTotalPages(Math.ceil(total / itemsPerPage));
  }, [total, itemsPerPage]);

  if (totalPages === 0) return null;

  return (
    <Pagination>
      <Pagination.Item
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </Pagination.Item>
      <Pagination.Item active={true}>
        {currentPage}/{totalPages}
      </Pagination.Item>

      <Pagination.Item
        onClick={() => {
          onPageChange(currentPage + 1);
        }}
        disabled={currentPage === totalPages}
      >
        Next
      </Pagination.Item>
    </Pagination>
  );
};

export default PaginationComponent;
