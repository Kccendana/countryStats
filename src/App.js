import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './pages/Home/Home';
import CountryDetail from './pages/CountryDetail/CountryDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/:code" element={<CountryDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
