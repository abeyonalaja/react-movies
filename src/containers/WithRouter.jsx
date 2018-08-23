import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

export const WithRouter = Wrapped => props => (
  <Router>
    <Wrapped {...props} />
  </Router>
);

export default WithRouter;
