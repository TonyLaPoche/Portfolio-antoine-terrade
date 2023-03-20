import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './component/layout';
import Page404 from './view/Error';
import Project from './view/Project';
import Home from './view/Home';
import './App.css';

// export const baseURL = process.env.NODE_ENV === "development" ? process.env.PUBLIC_URL : process.env.REACT_APP_URL_BASE_URL;
export const baseURL = '/';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={'/projet/:id'} element={<Project key={'uniqueKey'} />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
