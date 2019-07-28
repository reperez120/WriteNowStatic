import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import SentenceGeneratorForm from '../SentenceGeneratorForm/SentenceGeneratorForm';
import "./SentenceGeneratorPage.css"

class SentenceGeneratorPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
          firstArticle: '',
          article: '',
          adjective: [],
         subjectadjective: [],
         locationadjective: [],
          subject: [],
          verb: [],
          preposition: [],
          location: [],
          punctation: []
        };
      }
    
    handleFormSubmit = e => {

        e.preventDefault()
    
        const wordsAPI = 'https://calm-hamlet-15286.herokuapp.com/words?type=';
        const subURL = 'https://calm-hamlet-15286.herokuapp.com/words?type=subject';
        const artURL = 'https://calm-hamlet-15286.herokuapp.com/words?type=article';
        const adjURL = 'https://calm-hamlet-15286.herokuapp.com/words?type=adj';
        const verbURL = 'https://calm-hamlet-15286.herokuapp.com/words?type=verb';
        const prepURL = 'https://calm-hamlet-15286.herokuapp.com/words?type=preposition';
        const locURL = 'https://calm-hamlet-15286.herokuapp.com/words?type=location';
        const subAdjURL = 'https://calm-hamlet-15286.herokuapp.com/words?type=sub-adj';
        const locAdjURL = 'https://calm-hamlet-15286.herokuapp.com/words?type=loc-adj'

        const options = {
            method: 'GET',
          }

          fetch(locAdjURL,  options)
          .then(response => response.json())
          .then(data => {
              let locadj = data[Math.floor(Math.random() * data.length)]
              let locationadjective = locadj.word

              this.setState({
                  firstArticle: 'The',
                  article: 'the',
                  punctation: '.',
                  locationadjective
              });
          })  

          fetch(subAdjURL,  options)
          .then(response => response.json())
          .then(data => {
              let subadj = data[Math.floor(Math.random() * data.length)]
              let subjectadjective = subadj.word

              this.setState({
                  subjectadjective
              });
          })  

            fetch(subURL,  options)
            .then(response => response.json())
            .then(data => {
                let sub = data[Math.floor(Math.random() * data.length)]
                let subject = sub.word

                this.setState({
                    article: 'the',
                    subject
                });
            })  

            fetch(verbURL,  options)
            .then(response => response.json())
            .then(data => {
                let ver = data[Math.floor(Math.random() * data.length)]
                let verb = ver.word

                this.setState({
                    verb,
                });
            }) 

            fetch(prepURL, options)
            .then(response => response.json())
            .then(data => {
                let prep = data[Math.floor(Math.random() * data.length)]
                let preposition = prep.word

                this.setState({
                    preposition,
                });
            }) 

            fetch(locURL, options)
            .then(response => response.json())
            .then(data => {
                let loc = data[Math.floor(Math.random() * data.length)]
                let location = loc.word

                this.setState({
                    location,
                });
            }) 

            fetch(adjURL, options)
            .then(response => response.json())
            .then(data => {
                let adj = data[Math.floor(Math.random() * data.length)]
                console.log(adj)
                let adjective = adj.word

                this.setState({
                    adjective,
                });
            }) 
    }

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
                <SentenceGeneratorForm onSubmit={this.handleFormSubmit}>
                    <button type='submit'>
                        Write now!
                    </button>   
                </SentenceGeneratorForm>
                    <Link to="/">
                        <button>
                            Home
                        </button>  
                    </Link> 
                <h3>{this.state.firstArticle} {this.state.subjectadjective} {this.state.subject} {this.state.verb} {this.state.preposition} {this.state.article} {this.state.locationadjective} {this.state.location}{this.state.punctation} </h3>  
            </main>
       </div>
      );
    } 
  }
  
  export default SentenceGeneratorPage;
