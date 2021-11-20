import React,{useState} from 'react';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import Login from './components/Login/Login';
import { useEffect } from 'react';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if((localStorage.getItem("isLogged")==="1"))
    {
      setIsLoggedIn(true);
    }
  }, [])

  const loginHandler = (email,password) => {
    setIsLoggedIn(true);
    localStorage.setItem("isLogged","1");
  };
  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLogged","0");
  };

  return (
    <>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler}/>
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} /> }
        {isLoggedIn && <Home onLogout={logoutHandler} /> }
      </main>
    </>
  );
}

export default App;
