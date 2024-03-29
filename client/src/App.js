import './App.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import js

import NotFound from './Page/404';
import MainPage from './Component/Page';
import Navbar from "./Component/navBar";

function App() {

  return (
    <div className="App">
     
      <Router>
        <HelmetProvider>
          <div className=''>
          <Routes >
            <Route path="/"
              element={
                <>
                  <Helmet>
                    <title>XML Page</title>
                  </Helmet>
                  <MainPage />
                </>
              }
            />
           
          <Route path="*" element={<NotFound />} />
          </Routes>
          </div>
          
        </HelmetProvider>

      </Router>
    </div>
  );
}

export default App;
