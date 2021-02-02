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
              <AppBar />
              <PageLayout>
                <People />
              </PageLayout>
            </Route>
            <Route path="/home">
              <AppBar />
              <PageLayout>
                <Home />
              </PageLayout>
            </Route>
            <Route path="/why-now">
              <AppBar />
              <PageLayout>
                <WhyNow />
              </PageLayout>
            </Route>
            <Route path="/selected-transactions">
              <AppBar />
              <PageLayout>
                <SelectedTransactions />
              </PageLayout>
            </Route>
            <Route path="/home-fade">
              <Fade in={true} timeout={2000}>
                <div>
                  <AppBar />
                  <PageLayout>
                    <Home />
                  </PageLayout>
                </div>
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

export default App;
