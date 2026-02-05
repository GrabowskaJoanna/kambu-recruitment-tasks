import './App.css'
import HomePage from './components/HomePage.jsx';
import {useEffect, useState} from 'react';

function App() {
    const [darkTheme, setDarkTheme] = useState(false);


    useEffect(() => {
        if (darkTheme) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkTheme]);

    const toggleTheme = () => {
        setDarkTheme(prevState => !prevState);
    }

  return (
      <>
          <HomePage text={darkTheme ? 'Light Mode': 'Dark Mode'} onClick={toggleTheme}/>
      </>
  )

}

export default App
