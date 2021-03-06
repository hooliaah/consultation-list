import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ConsultationDetailPage from "./pages/ConsultationDetailPage";
import ConsultationListPage from "./pages/ConsultationListPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ConsultationListPage} />
        <Route path='/:consultationId' component={ConsultationDetailPage} />
      </Switch>
    </Router>
  );
}

export default App;
