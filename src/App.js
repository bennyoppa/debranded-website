import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import RootContextProvider from "../src/context/RootContext";

import NavBar from "../src/components/NavBar";
import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/HomePage";
import TopicPage from "./pages/TopicPage";
import AccordionPage from "./pages/AccordionPage";
import ErrorPage from "./pages/ErrorPage";
import { pageData } from "./constants/index";

const App = () => {
  return (
    <Router>
      <RootContextProvider>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <WelcomePage pageHeading="Welcome" />
          </Route>
          <Route exact path="/home">
            <HomePage pageHeading="Home" />
          </Route>
          {pageData.topicPages.map((page, i) => (
            <Route key={i} exact path={`/topic/${page.pageNum}`}>
              <TopicPage pageHeading={`Topic ${page.pageNum}`} page={page} />
            </Route>
          ))}
          {pageData.accordionPages.map((page, i) => (
            <Route key={i} exact path={`/accordion/${page.pageNum}`}>
              <AccordionPage
                pageHeading={`Accordion ${page.pageNum}`}
                page={page}
              />
            </Route>
          ))}
          <Route path="*">
            <ErrorPage pageHeading="Error" />
          </Route>
        </Switch>
      </RootContextProvider>
    </Router>
  );
};

export default App;
