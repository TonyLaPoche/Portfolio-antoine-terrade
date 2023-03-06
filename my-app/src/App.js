import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './component/layout';
import Page404 from './view/ErrorPages';
import Home from './view/HomePage';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
