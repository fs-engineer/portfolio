import AppWrapper from './components/layout/AppWrapper';

import Navigations from './components/Navigations/Navigations';
import HomeView from './views/HomeView';

function App() {
  return (
    <>
      <AppWrapper />
      <Navigations />
      <HomeView />
    </>
  );
}

export default App;
