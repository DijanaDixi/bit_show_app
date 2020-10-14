import React from "react";
import Header from "./component/Header/Header";
import Movies from "./component/Movies/Movies";
import InfoPage from "./component/InfoPage/InfoPage";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
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
