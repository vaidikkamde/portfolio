import React, { useState } from "react";
import Navbar from "./Navbar";
import PageDisplayed from "./PageDisplayed";
function App() {
  const [page, setPage] = useState("Home");
  function navigate(page) {
    // console.log(page);
    setPage(page);
  }
  return (
    <div>
      <Navbar navigate={navigate} />
      <PageDisplayed page={page} navigate={navigate} />
    </div>
  );
}

export default App;
