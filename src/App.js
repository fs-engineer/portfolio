import AppWrapper from './components/layout/AppWrapper';
import Navigations from './components/Navigations/Navigations';
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import Portfolio from './views/PortfolioView';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <AppWrapper>
        <Navigations />
        <Switch>
          <Route path="/" component={HomeView} exact />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contacts" component={ContactsView} />
        </Switch>
      </AppWrapper>
    </>
  );
}

export default App;
