import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './containers/Layout';
import Home from './containers/HomePage';
import NoMatch from './containers/NotFoundPage';
import About from './containers/AboutPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
