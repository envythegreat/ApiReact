import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      Gift:[]
    }
  } 
  componentDidMount() {
    // fetch('https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({Gift:data.data})
    //   }).catch(error => {console.log('Something Went Wrong', error)});

    
  }

  performSearch = (query) =>{
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
      .then(response => {
        const {data} = response.data;
        this.setState({
          Gift: data
        });
        console.log(data)
      })
      .catch(error => {console.log('Something Went Wrong : ', error)});
  }

  render() { 
    // console.log(this.state.Gift)
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm  onSearch={this.performSearch} />      
          </div>   
        </div>    
        <div className="main-content">
          <GifList data={this.state.Gift} />
        </div>
      </div>
    );
  }
}
