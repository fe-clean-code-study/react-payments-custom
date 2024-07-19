import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Payments from './pages/Payments';
import CardList from './pages/CardList';
import CardRegist from './pages/CardRegist';
import CardAlias from './pages/CardAlias';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/payments'} element={<Payments />} />
        <Route path={'/card-list'} element={<CardList />} />
        <Route path={'/card-regist'} element={<CardRegist />} />
        <Route path={'/card-alias'} element={<CardAlias />} />
      </Routes>
    </Router>
  );
}

export default App;
