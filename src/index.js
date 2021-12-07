import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.scss';
import App from './components/App';
import Page from './components/Page';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Page page="article" />} />
            <Route path="history" element={<Page page="history" />} />
            <Route path="diff" element={<Page page="diff" />} />
            <Route path="edit" element={<Page page="edit" />} />
            <Route path="talk" element={<Page page="talk" />} />
            <Route path="talk-history" element={<Page page="talk-history" />} />
            <Route path="talk-edit" element={<Page page="talk-edit" />} />
            <Route path="user" element={<Page page="user" />} />
            <Route path="user-dashboard" element={<Page page="user-dashboard" />} />
            <Route path="special" element={<Page page="special" />} />
          </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
