import AppWrapper from './components/layout/AppWrapper';
import Container from './components/layout/Container';
import Navigations from './components/Navigations/Navigations';
import HomeView from './views/HomeView';

function App() {
  return (
    <Container>
      <AppWrapper />
      <Navigations />
      <HomeView />
    </Container>
  );
}

export default App;
