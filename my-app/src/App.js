import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './component/layout';
import Page404 from './view/Error';
import Project from './view/Project';
import Home from './view/Home';
import './App.css';

export const url = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_URL_PROD
  : false;

  console.log(url);
  console.log(process.env.NODE_ENV);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={url ? url : '/'} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={`${url ? url : '/'}:id`} element={<Project />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
