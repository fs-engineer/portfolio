import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import AppWrapper from './components/layout/AppWrapper';
import Navigations from './components/Navigations/Navigations';
const HomeView = React.lazy(() => import('./views/HomeView'));
const Portfolio = React.lazy(() => import('./views/PortfolioView'));
const ContactsView = React.lazy(() => import('./views/ContactsView'));

function App() {
  return (
    <>
      <AppWrapper>
        <Navigations />
        <Suspense fallback={<div>...Loading</div>}>
          <Switch>
            <Route path="/" component={HomeView} exact />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contacts" component={ContactsView} />
            <Route component={HomeView} />
          </Switch>
        </Suspense>
        <Footer />
      </AppWrapper>
    </>
  );
}

export default App;
