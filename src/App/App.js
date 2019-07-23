import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import SentenceGenerator from '../SentenceGenerator/SentenceGenerator';
import SentenceResults from '../SentenceResults/SentenceResults';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='appHeader'>
            <h1>
              Write Now
            </h1>
      </header>
        <main>
        <Route 
          exact path='/' 
          component={LandingPage} 
          />
       <Route 
          exact path='/sentence-generator' 
          component={SentenceGenerator} 
        /> 
        <Route 
          exact path='/sentence-results' 
          component={SentenceResults} 
        /> 
        </main>
    </div>
  );
}

export default App;
