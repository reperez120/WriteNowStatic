import React from 'react';
import { Route} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import DownloadPrompt from '../DownloadPrompt/DownloadPrompt';
import SentenceGeneratorPage from '../SentenceGeneratorPage/SentenceGeneratorPage';
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
          component={SentenceGeneratorPage} 
        /> 
        <Route 
          exact path='/sentence-generator' 
          component={DownloadPrompt} 
        /> 
        </main>
    </div>
  );
}

export default App;
