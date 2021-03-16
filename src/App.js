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
import { useTextStyles } from "./Styles/TextStyles";

function App() {
  const textStyles = useTextStyles();
  return (
    <>
      <Hidden mdUp>
        <div style={{ height: "100vh" }}>
          <div
            style={{
              marginTop: -40,
              paddingTop: "40vh",
              width: "100vw",
              textAlign: "center",
            }}
          >
            <p
              className={textStyles.greenContentLead}
              style={{ lineHeight: 1 }}
            >
              Mobile compatibility not yet supported. Please view on desktop.
            </p>
          </div>
        </div>
      </Hidden>
      <Hidden smDown>
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
