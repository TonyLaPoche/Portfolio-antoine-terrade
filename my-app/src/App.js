import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './component/layout';
import Page404 from './view/Error';
import Project from './view/Project';
import Home from './view/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="url-repos-2" element={<p>page du repos 2</p>} />
          <Route path="*" element={<Page404 />} />
          <Route path="project/:id" element={<Project />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
