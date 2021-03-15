import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Home/index";
import { People } from "./People/index";
import { PageLayout } from "./Layout/PageLayout";
import { EnterSite } from "./EnterSite/index";
import { AppBar } from "./Layout/AppBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { WhyNow } from "./WhyNow/index";
import { SelectedTransactions } from "./SelectedTransactions/index";
import { Hidden } from "@material-ui/core";
import { compose } from "redux";
import { Contact } from "./Contact";

function App() {
  return (
    <>
      <Hidden mdDown>
        <Router>
          <div
            style={{
              minHeight: "100vh",
            }}
          >
            <Switch>
              <Route path="/world-class-experience">
                <Page>
                  <People />
                </Page>
              </Route>
              <Route path="/world-class-advice">
                <Page>
                  <Home />
                </Page>
              </Route>
              <Route path="/why-now">
                <Page>
                  <WhyNow />
                </Page>
              </Route>
              <Route path="/selected-transactions">
                <Page>
                  <SelectedTransactions />
                </Page>
              </Route>
              <Route path="/contact">
                <Page>
                  <Contact />
                </Page>
              </Route>

              <Route path="/">
                <EnterSite />
              </Route>
            </Switch>
          </div>
        </Router>
      </Hidden>
    </>
  );
}

export const Page = (props) => {
  return (
    <PageLayout>
      <div>{props.children}</div>
    </PageLayout>
  );
};

export default App;
