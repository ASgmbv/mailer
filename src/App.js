import React from "react";
import { SubscriberPage } from "./pages/SubscribePage";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ThanksPage } from "./pages/ThanksPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/welcome" component={ThanksPage} />
          <Route path="/" component={SubscriberPage} />
          <Redirect from="*" to="/" component={SubscriberPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
