import React from "react";
import "./Pagination.css"; // For styling
import { getPaginationRange } from "../../utils/pokemon-listing";
import { ReactComponent as LeftArrow } from "../../assets/left.svg";
import { ReactComponent as RightArrow } from "../../assets/right.svg";

type Props = {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
};

const Pagination: React.FC<Props> = ({ currentPage, totalPages, onChange }) => {
  const pages = getPaginationRange(currentPage, totalPages);

  return (
    <div className="custom-pagination">
      <button
        className="pagination__pagination-button"
        disabled={currentPage === 1}
        onClick={() => onChange(currentPage - 1)}
      >
        <LeftArrow />
        Previous
      </button>

      {pages.map((page, idx) =>
        typeof page === "number" ? (
          <button
            key={idx}
            className={page === currentPage ? "active" : ""}
            onClick={() => onChange(page)}
          >
            {page}
          </button>
        ) : (
          <span key={idx} className="dots">
            ...
          </span>
        )
      )}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onChange(currentPage + 1)}
        className="pagination__pagination-button"
      >
        Next
        <RightArrow />
      </button>
    </div>
  );
};

export default Pagination;
