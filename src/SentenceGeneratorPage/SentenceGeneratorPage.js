import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../config';
import DownloadPrompt from '../DownloadPrompt/DownloadPrompt';
import "./SentenceGeneratorPage.css"
 
class SentenceGeneratorPage extends Component {
   constructor(props) {
       super(props);
       this.state = {
           genre: '',
           firstArticle: '',
           secondArticle: '',
           space: '',
           subjectAdjective: [],
           subject: [],
           verb: [],
           preposition: [],
           article: '',
           locationAdjective: [],
           location: [],
           punctuation: [],
           downloadPromptText: '',
           loading: false
        }
    }
 
   handleGenre = e => {
        this.setState({
           genre: e.target.value
       });
    }
  
   handleFormSubmit = e => {
        e.preventDefault()
       this.setState({ loading: true })
       const options = {
           method: 'GET',
        }
      
        function formatQueryParams(params) {
           const queryItems = Object.keys(params)
           .map(key => `${encodeURIComponent(key)}=${params[key]}`)
           return queryItems.join('&');
        }
      
        const getWord = (wordType) => {
           const params = { type: wordType }
           if (this.state.genre !== 'wildcard')
           params.genre = this.state.genre
           const query = formatQueryParams(params);
           const api = `${config.API_ENDPOINT}?${query}`;
           return fetch(api, options)
           .then(res => {
               if (!res.ok)
               throw new Error(res.statusText)
               return res.json()
           })
           .then(data => {
               const newWord = data[Math.floor(Math.random() * data.length)]
               const word = newWord.word
               const CASE = {
                   'sub-adj': 'subjectAdjective',
                   'subject': 'subject',
                   'loc-adj': 'locationAdjective',
                   'location': 'location',
                   'verb': 'verb',
                   'preposition': 'preposition',
               }
               this.setState({
                   [CASE[wordType]]: word
               })
           })
       }
 
    const getSentence = () => {
        const promises = [
            getWord('verb'),
            getWord('preposition'),
   ]
   if (this.state.genre === 'wildcard') {
       promises.push(
           getWord('sub-adj'),
           getWord('subject'),
           getWord('loc-adj'),
           getWord('location')
       )
   } else {
           promises.push(
               getWord('sub-adj'),
               getWord('subject'),
               getWord('loc-adj'),
               getWord('location')
            )
        }
          
           Promise.all(promises)
           .then(res => {
               this.setState({
                   firstArticle: 'The',
                   secondArticle: 'the',
                   space: ' ',
                   punctuation: '.',
                   loading: false,
                   downloadPromptText: 'Download prompt as TXT file.'
               })
           })
       }
        
       getSentence()
   }
      
       render() {
           const sentence = `${this.state.firstArticle} ${this.state.subjectAdjective} ${this.state.subject} ${this.state.verb} ${this.state.preposition} ${this.state.secondArticle} ${this.state.locationAdjective} ${this.state.location}${this.state.punctuation}`
           return (
               <div className='SentenceGenerator'>
               <header className='appHeader'>
                    <h2 className='description'>
                    Select a genre. Then click the "write now" button to get a writing prompt in that genre.
                    Select "wild card" or click on the "write now" button without selecting anything to
                    get a sentence that combines elements from all the genres.
                    </h2>
               </header>
               <form className='radioForm' onSubmit={this.handleFormSubmit}>
                <fieldset>
                <legend>literary genre</legend>
                <div className='radioButtons'>
                <label className='scifiButton'>
                <input id="scifi" type="radio" className='radio' value="scifi" name="option"
                checked={this.state.genre === 'scifi'}
                onChange={this.handleGenre} />
                </label>
                <label className='fantasyButton'>
                <input id="fantasy" type="radio" className='radio' value="fantasy" name="option"
                checked={this.state.genre === 'fantasy'}
                onChange={this.handleGenre} />
                </label>
                <label className='horrorButton'>
                <input id="horror" type="radio" className='radio' value="horror" name="option"
                checked={this.state.genre === 'horror'}
                onChange={this.handleGenre} />
                </label>
                <label className='westernButton'>
                <input id="western" type="radio" className='radio' value="western" name="option"
                checked={this.state.genre === 'western'}
                onChange={this.handleGenre} />
                
                </label>
                <label className='litButton'>
                <input id="lit" type="radio" className='radio' value="lit" name="option"
                checked={this.state.genre === 'lit'}
                onChange={this.handleGenre} />
                </label>
                <label className='wildcardButton'>
                <input id="wildcard" type="radio" className='radio' value="wildcard" name="option"
                checked={this.state.genre === 'wildcard'}
                onChange={this.handleGenre} />
                </label>
                </div>
                <button type='submit' className='writeButton'>
                Write now!
                </button>
                <Link to="/">
                <button className='homeBotton'>
                Home
                </button>
                </Link>
                </fieldset>
               </form>
               {this.state.loading ? <h1>Loading...</h1> : null}
               <h3 id="promptSentence">
                    {sentence}
               </h3>
               <DownloadPrompt
                    sentence = {sentence}
                    downloadPromptText = {this.state.downloadPromptText}
                />
               </div>
               );
           }
       }
      
       export default SentenceGeneratorPage;
      

