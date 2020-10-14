import React from "react";

import Movies from "./component/Movies/Movies";
import InfoPage from "./component/InfoPage/InfoPage";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact>
        <Movies />
        </Route>
        <Route path="/infoPage/:id">
          <InfoPage />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
