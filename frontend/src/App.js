// App.js
import React from 'react';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
// import Profile from './Profile';
import Signin from './pages/Signin';
// import Signup from './Signup';

const App = () => {
  return (
    <>
      <Router>

        <Provider store={store}>
          <Routes>
            <Route path='/collection' element={<Home />} />
            <Route path='/' element={<Signin />} />
          </Routes>
        </Provider>
      </Router>
    </>
  );
};

export default App;