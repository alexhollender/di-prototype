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
            <Route index element={<Page page="article" layout="panel" />} />
            <Route path="history" element={<Page page="history" layout="full" />} />
            <Route path="diff" element={<Page page="diff" layout="full" />} />
            <Route path="edit" element={<Page page="edit" layout="no-panel" />} />
            <Route path="talk" element={<Page page="talk" layout="no-panel" />} />
            <Route path="talk-history" element={<Page page="talk-history" layout="full" />} />
            <Route path="talk-edit" element={<Page page="talk-edit" layout="no-panel" />} />
            <Route path="user" element={<Page page="user" layout="no-panel" />} />
            <Route path="user-dashboard" element={<Page page="user-dashboard" layout="no-panel" />} />
            <Route path="special" element={<Page page="special" layout="full" />} />
          </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
