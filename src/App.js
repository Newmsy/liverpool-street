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
import { Fade } from "@material-ui/core";
import { compose } from "redux";
import { Contact } from "./Contact";

function App() {
  return (
    <>
      <Router>
        <div
          style={{
            backgroundColor: "rgba(150,150,150,0.1)",
            minHeight: "100vh",
            overflowY: "hidden",
          }}
        >
          <Switch>
            <Route path="/people">
              <Page>
                <People />
              </Page>
            </Route>
            <Route path="/home">
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
            <Route path="/home-fade">
              <Fade in={true} timeout={2000}>
                <Page>
                  <Home />
                </Page>
              </Fade>
            </Route>
            <Route path="/">
              <EnterSite />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export const Page = (props) => {
  return (
    <PageLayout>
      <AppBar />
      {props.children}
    </PageLayout>
  );
};

export default App;
