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
          punctation: [],
          genre: '',
          download: '',
          loading: false
        };
      }

      downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([document.getElementById('myInput').value], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "WriteNowPrompt.txt";
        document.body.appendChild(element); 
        element.click();
      }

      handleChange = e => {
        this.setState({
          genre: e.target.value
        });
      }
    
    handleFormSubmit = e => {

        e.preventDefault()
        console.log(this.state.genre)

        this.setState({ loading: true })
    
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

          fetch(verbURL,  options)
          .then(response => response.json())
          .then(data => {
              let ver = data[Math.floor(Math.random() * data.length)]
              let verb = ver.word

              this.setState({
                  firstArticle: 'The',
                  verb,
                  article: 'the',
                  punctation: '.',
                  loading: false,
                  download: 'Download prompt as TXT file'
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

          if (this.state.genre == 'horror') {

            fetch('https://calm-hamlet-15286.herokuapp.com/words?type=sub-adj&genre=horror', options)
            .then(response => response.json())
            .then(data => {
                let subadj = data[Math.floor(Math.random() * data.length)]
                let subjectadjective = subadj.word
  
                this.setState({
                    subjectadjective
                });
            }) 

            fetch('https://calm-hamlet-15286.herokuapp.com/words?type=subject&genre=horror', options)
            .then(response => response.json())
            .then(data => {
                let sub = data[Math.floor(Math.random() * data.length)]
                let subject = sub.word
  
                this.setState({
                    subject
                });
            })  

            fetch('https://calm-hamlet-15286.herokuapp.com/words?type=loc-adj&genre=horror', options)
            .then(response => response.json())
            .then(data => {
                let locadj = data[Math.floor(Math.random() * data.length)]
                let locationadjective = locadj.word
  
                this.setState({
                    locationadjective
                });
            }) 

                fetch('https://calm-hamlet-15286.herokuapp.com/words?type=loc-adj&genre=horror', options)
            .then(response => response.json())
            .then(data => {
                let locadj = data[Math.floor(Math.random() * data.length)]
                let locationadjective = locadj.word
  
                this.setState({
                    locationadjective
                });
            }) 
         
            fetch('https://calm-hamlet-15286.herokuapp.com/words?type=location&genre=horror', options)
            .then(response => response.json())
            .then(data => {
                let loc = data[Math.floor(Math.random() * data.length)]
                let location = loc.word
  
                this.setState({
                    location
                });
            })  
          }

            if (this.state.genre == 'wildcard') {

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

            fetch(locAdjURL,  options)
                .then(response => response.json())
                .then(data => {
                    let locadj = data[Math.floor(Math.random() * data.length)]
                    let locationadjective = locadj.word

                    this.setState({
                        firstArticle: 'The',
                        article: 'the',
                        punctation: '.',
                        locationadjective,
                        loading: false
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
            }
            if (this.state.genre == 'fantasy') {

                fetch('https://calm-hamlet-15286.herokuapp.com/words?type=sub-adj&genre=fantasy', options)
                .then(response => response.json())
                .then(data => {
                    let subadj = data[Math.floor(Math.random() * data.length)]
                    let subjectadjective = subadj.word
      
                    this.setState({
                        subjectadjective
                    });
                }) 
    
                fetch('https://calm-hamlet-15286.herokuapp.com/words?type=subject&genre=fantasy', options)
                .then(response => response.json())
                .then(data => {
                    let sub = data[Math.floor(Math.random() * data.length)]
                    let subject = sub.word
      
                    this.setState({
                        subject
                    });
                })  
    
                fetch('https://calm-hamlet-15286.herokuapp.com/words?type=loc-adj&genre=fantasy', options)
                .then(response => response.json())
                .then(data => {
                    let locadj = data[Math.floor(Math.random() * data.length)]
                    let locationadjective = locadj.word
      
                    this.setState({
                        locationadjective
                    });
                }) 
    
                    fetch('https://calm-hamlet-15286.herokuapp.com/words?type=loc-adj&genre=fantasy', options)
                .then(response => response.json())
                .then(data => {
                    let locadj = data[Math.floor(Math.random() * data.length)]
                    let locationadjective = locadj.word
      
                    this.setState({
                        locationadjective
                    });
                }) 
             
                fetch('https://calm-hamlet-15286.herokuapp.com/words?type=location&genre=fantasy', options)
                .then(response => response.json())
                .then(data => {
                    let loc = data[Math.floor(Math.random() * data.length)]
                    let location = loc.word
      
                    this.setState({
                        location
                    });
                })              
            }

            if (this.state.genre == 'western') {

                fetch('https://calm-hamlet-15286.herokuapp.com/words?type=sub-adj&genre=western', options)
                .then(response => response.json())
                .then(data => {
                    let subadj = data[Math.floor(Math.random() * data.length)]
                    let subjectadjective = subadj.word
      
                    this.setState({
                        subjectadjective
                    });
                }) 
    
                fetch('https://calm-hamlet-15286.herokuapp.com/words?type=subject&genre=western', options)
                .then(response => response.json())
                .then(data => {
                    let sub = data[Math.floor(Math.random() * data.length)]
                    let subject = sub.word
      
                    this.setState({
                        subject
                    });
                })  
    
                fetch('https://calm-hamlet-15286.herokuapp.com/words?type=loc-adj&genre=western', options)
                .then(response => response.json())
                .then(data => {
                    let locadj = data[Math.floor(Math.random() * data.length)]
                    let locationadjective = locadj.word
      
                    this.setState({
                        locationadjective
                    });
                }) 
    
                    fetch('https://calm-hamlet-15286.herokuapp.com/words?type=loc-adj&genre=western', options)
                .then(response => response.json())
                .then(data => {
                    let locadj = data[Math.floor(Math.random() * data.length)]
                    let locationadjective = locadj.word
      
                    this.setState({
                        locationadjective
                    });
                }) 
             
                fetch('https://calm-hamlet-15286.herokuapp.com/words?type=location&genre=western', options)
                .then(response => response.json())
                .then(data => {
                    let loc = data[Math.floor(Math.random() * data.length)]
                    let location = loc.word
      
                    this.setState({
                        location
                    });
                })              
            }

            if (this.state.genre == 'genlit') {

                fetch('https://calm-hamlet-15286.herokuapp.com/words?type=sub-adj&genre=lit', options)
                .then(response => response.json())
                .then(data => {
                    let subadj = data[Math.floor(Math.random() * data.length)]
                    let subjectadjective = subadj.word
      
                    this.setState({
                        subjectadjective
                    });
                }) 
    
                fetch('https://calm-hamlet-15286.herokuapp.com/words?type=subject&genre=lit', options)
                .then(response => response.json())
                .then(data => {
                    let sub = data[Math.floor(Math.random() * data.length)]
                    let subject = sub.word
      
                    this.setState({
                        subject
                    });
                })  
    
                fetch('https://calm-hamlet-15286.herokuapp.com/words?type=loc-adj&genre=lit', options)
                .then(response => response.json())
                .then(data => {
                    let locadj = data[Math.floor(Math.random() * data.length)]
                    let locationadjective = locadj.word
      
                    this.setState({
                        locationadjective
                    });
                }) 
    
                    fetch('https://calm-hamlet-15286.herokuapp.com/words?type=loc-adj&genre=lit', options)
                .then(response => response.json())
                .then(data => {
                    let locadj = data[Math.floor(Math.random() * data.length)]
                    let locationadjective = locadj.word
      
                    this.setState({
                        locationadjective
                    });
                }) 
             
                fetch('https://calm-hamlet-15286.herokuapp.com/words?type=location&genre=lit', options)
                .then(response => response.json())
                .then(data => {
                    let loc = data[Math.floor(Math.random() * data.length)]
                    let location = loc.word
      
                    this.setState({
                        location
                    });
                })              
            }

            if (this.state.genre == 'scifi') {

                fetch('https://calm-hamlet-15286.herokuapp.com/words?type=sub-adj&genre=scifi', options)
                .then(response => response.json())
                .then(data => {
                    let subadj = data[Math.floor(Math.random() * data.length)]
                    let subjectadjective = subadj.word
      
                    this.setState({
                        subjectadjective
                    });
                }) 
    
                fetch('https://calm-hamlet-15286.herokuapp.com/words?type=subject&genre=scifi', options)
                .then(response => response.json())
                .then(data => {
                    let sub = data[Math.floor(Math.random() * data.length)]
                    let subject = sub.word
      
                    this.setState({
                        subject
                    });
                })  
    
                fetch('https://calm-hamlet-15286.herokuapp.com/words?type=loc-adj&genre=scifi', options)
                .then(response => response.json())
                .then(data => {
                    let locadj = data[Math.floor(Math.random() * data.length)]
                    let locationadjective = locadj.word
      
                    this.setState({
                        locationadjective
                    });
                }) 
    
                    fetch('https://calm-hamlet-15286.herokuapp.com/words?type=loc-adj&genre=scifi', options)
                .then(response => response.json())
                .then(data => {
                    let locadj = data[Math.floor(Math.random() * data.length)]
                    let locationadjective = locadj.word
      
                    this.setState({
                        locationadjective
                    });
                }) 
             
                fetch('https://calm-hamlet-15286.herokuapp.com/words?type=location&genre=scifi', options)
                .then(response => response.json())
                .then(data => {
                    let loc = data[Math.floor(Math.random() * data.length)]
                    let location = loc.word
      
                    this.setState({
                        location
                    });
                })              
            }       
            
    }

    render() {
        const firstArticle = this.state.firstArticle;
        const subadj = this.state.subjectadjective; 
        const sub = this.state.subject;
        const verb = this.state.verb;
        const prep = this.state.preposition; 
        const art = this.state.article;
        const locadj = this.state.locationadjective;
        const loc = this.state.location;
        const punct = this.state.punctation
        const space = ' '

      return (
          
        <div className='SentenceGenerator'>
            <header className='appHeader'>
                <h3>
                    Select a genre then click the "write now" button to get a writing prompt in that genre. 
                    Select the "wild card" to get a sentence that combines elements from all the genres.
                </h3>
            </header>
            <main> 
                <div className ='radioform'>
                    <form>
                        <label>
                            <input type="radio" className="radio" value="scifi" name="scifi" 
                                checked={this.state.genre === 'scifi'}
                                onChange={this.handleChange}/> 
                            Sci-Fi 
                        </label>
                        <label>
                            <input type="radio" className="radio" value="fantasy" name="fantasy" 
                                checked={this.state.genre === 'fantasy'}
                                onChange={this.handleChange}/> 
                            Fantasy
                        </label>
                        <label>
                            <input type="radio" className="radio" value="horror" name="horror" 
                                checked={this.state.genre === 'horror'}
                                onChange={this.handleChange}/> 
                            Horror
                        </label>
                        <label>
                            <input type="radio" className="radio" value="western" name="western" 
                                checked={this.state.genre === 'western'}
                                onChange={this.handleChange}/> 
                            Western
                        </label>
                        <label>
                            <input type="radio" className="radio" value="genlit" name="genlit" 
                            checked={this.state.genre === 'genlit'}
                            onChange={this.handleChange}/> 
                            General Lit
                        </label>
                        <label>
                            <input type="radio" className="radio" value="wildcard" name="wildcard" 
                            checked={this.state.genre === 'wildcard'}
                            onChange={this.handleChange}/> 
                            Wild Card!
                        </label>
                    </form>
                </div>
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
                    {this.state.loading ? <h1>Loading...</h1>: null}
                    <h3 id="promptsentence">
                        {this.state.firstArticle} {this.state.subjectadjective} {this.state.subject} {this.state.verb} {this.state.preposition} {this.state.article} {this.state.locationadjective} {this.state.location}{this.state.punctation}
                    </h3> 
                    
                    <input id="myInput" value={firstArticle + space + subadj  + space + sub  + space + verb + space + prep  + space + art + space + locadj + space + loc + punct} />
                     <button 
                        onClick={this.downloadTxtFile}>
                        {this.state.download}
                    </button>
            </main>
       </div>
      );
    } 
  }

  export default SentenceGeneratorPage;
