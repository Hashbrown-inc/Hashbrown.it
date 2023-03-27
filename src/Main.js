import React from 'react';
import {Route, Routes } from 'react-router-dom';

import home from './home';
import playground from './pages/playground';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<home/>}></Route>
      <Route exact path='/playground' element={<playground/>}></Route>
    </Routes>
  );
}

export default Main;