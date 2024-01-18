// App.js
import React from 'react';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar'
import Home from './pages/Home';
// import Profile from './Profile';
// import Signin from './Signin';
// import Signup from './Signup';

const App = () => {
  return (
    <>
      <Router>

        <Provider store={store}>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Provider>
      </Router>
    </>
  );
};

export default App;