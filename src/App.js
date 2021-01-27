import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Home/index";
import { People } from "./People/index";
import { PageLayout } from "./Layout/PageLayout";
import { AppBar } from "./Layout/AppBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <AppBar />
      <PageLayout>
        <Router>
          <div>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/people">
                <People />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </PageLayout>
    </>
  );
}

export default App;
