import React, { Component } from 'react';
import axios from  'axios';
import Form from './components/Form'
import Loading from './components/Loading'
import Results from './components/Results'

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      gif: {
        loading: false,
        error: false,
        data: []
      }    
    }
  }

  fetchGif = str => {
    this.setState({
      gif: {
        ...this.state.gif,
        loading: true
      }     
    })
    axios
      .get(
        `https://api.tenor.com/v1/search?q=${str}&key=UYS8QY5H2NPA`
      )
      .then(results => {
        this.setState({
          gif:{
            ...this.state.gif,
            data: [...results.data.results],
            loading: false
          }
        },
        ()=>{
          console.log(this.state.gif.data)
        }
      )
    })
      .catch(error=>{
        this.setState({
          gif: {
            ...this.state.gif,
            Error: true
          }         
        })
        console.log(error)
      })
  }

  render(){
    return(
      <div className='App'>
        <h1>Gif picker</h1>
        <h2>Welke gif moet ik voor je zoeken?</h2>
        <Form fetchGif={this.fetchGif}/>
        {this.state.gif.loading && <Loading />}
        {Object.keys(this.state.gif.data).length !==0 &&(
          <Results data={this.state.gif.data} /> 
        )}  
      </div>
    )
  }
}
