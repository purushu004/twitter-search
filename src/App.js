import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Tweets from './tweets/Tweets';
import Search from './tweets/Search';
import axios from 'axios';
import './App.css';
import './components/layout/Navbar.css';

class App extends Component {
  state = {
    tweets: [],
    loading: false,
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      'https://res.cloudinary.com/dpcb7n9lx/raw/upload/v1584549606/codebeautify_jk8jnl.json',
    );
    this.setState({ tweets: res.data, loading: false });
    console.log(res);
  }

  //Search tweets
  searchTweets = (searchQuery, searchedTweets) => {
    console.log(searchQuery, searchedTweets);
    this.setState({ loading: false, tweets: searchedTweets });
    console.log(this.state.tweets);
  };

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search searchTweets={this.searchTweets} tweets={this.state.tweets} />
          <Tweets loading={this.state.loading} tweets={this.state.tweets} />
        </div>
      </div>
    );
  }
}

export default App;
