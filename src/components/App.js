import React from 'react';
import { HashRouter as Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Detail from '../routes/Detail';

const App = () => {
  return (
    <Routes>
      <Route exact path={"/"} component={Home}/>
      <Route exact path={"/:id"} component={Detail}/>
    </Routes>
  );
}

export default App;
