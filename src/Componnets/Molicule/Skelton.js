import React from "react";

function Skeleton() {
  return (
    <div className="skeleton-container">
      <div className="skeleton-image"></div>
      <div className="skeleton-text skeleton-text-title"></div>
      <div className="skeleton-text skeleton-text-subtitle"></div>
      <div className="skeleton-text skeleton-text-info"></div>
    </div>
  );
}

export default Skeleton;
