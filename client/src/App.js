import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SubjectContext } from './SubjectsContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/HomePage';
import Info from './pages/InfoPage';
import Calculate from './pages/CalculatePage';
import Result from './pages/ResultPage';
import background from './content/background.png';

import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    fontFamily: ['Segoe UI'],
    h2: {
      fontWeight: 'bold',
    },
    h4: {
      fontWeight: 'bold',
      fontSize: '30px',
    },
    h5: {
      fontSize: '25px',
    },
    subtitle1: {
      color: '#677788',
      fontSize: '22px',
    },
    subtitle2: {
      fontSize: '24px',
    },
    body1: {
      color: '#677788',
      fontSize: '24px',
    },
    body2: {
      color: '#677788',
      fontSize: '20px',
    }
  },
  palette: {
    primary: {
      main: '#377dff'
    }
  }
});

theme = responsiveFontSizes(theme);

function App() {
  const [subjectList, setSubjectList] = useState([])

  return (
    <div style={{ 
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      /*width: '100vw',*/
      height: '100vh'
    }}>
      <Router>
        <ThemeProvider theme={theme}>
          <Header />
            <SubjectContext.Provider value={{subjectList, setSubjectList}}>
              <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/info" element={ <Info/> }/>
                <Route path="/calculate" element={ <Calculate/> }/>
                <Route path="/calculate/result" element={<Result />}/>
              </Routes>
            </SubjectContext.Provider>
          <Footer />
        </ThemeProvider>
      </Router>

      
    </div>
  )
}

export default App;