import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { FindView, ShowReservationView } from 'Views';
import GlobalPageWrapper from './GlobalPageWrapper';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalPageWrapper>
        <Switch>
          <Route path="/:confirmationCode">
            <ShowReservationView />
          </Route>
          <Route exact path="/">
            <FindView />
          </Route>
        </Switch>
      </GlobalPageWrapper>
    </BrowserRouter>
  );
}
