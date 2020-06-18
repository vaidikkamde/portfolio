import React from "react";

function CopyFooter() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <p className="text-center mt-5 mb-3 text-muted">
      &copy; {year} Vaidik Kamde
    </p>
  );
}
export default CopyFooter;
