import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import "./SentenceGenerator.css"

class SentenceGenerator extends Component {
    render() {
      return (
        <div className='SentenceGenerator'>
          <header className='appHeader'>
            <h3>
                Suffering from writer's block? 
                Write Now is here to help! 
                Click the button to get a randomly 
                generated sentence you can use as a writing prompt.
                </h3>
          </header>
            <main> 
                <form class='prompt-form'>
                    <Link to="/sentence-results">
                        <button type='submit'>Write now!</button>  
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
  
  export default SentenceGenerator;
