import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import "./SentenceResults.css"

class SentenceResults extends Component {
    render() {
      return (
        <div className='SentenceGenerator'>
          <header className='appHeader'>
            <h4>Your prompt is:</h4>
                <p>
                    Example writing prompt sentence.
                </p>
          </header>
            <main> 
                <form class='prompt-form'>
                    <Link to="/"> 
                        <button type='submit'>Try Again?</button>     
                    </Link> 
                    <Link to="/">
                        <button type='submit'>Home</button>  
                    </Link>   
                </form>
            </main>
       </div>
      );
    } 
  }
  
  export default SentenceResults;
