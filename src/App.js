import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Tweets from './tweets/Tweets';
import Search from './tweets/Search';
import axios from 'axios';
import './App.css';

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
  }

  //Search tweets
  searchTweets = async searchQuery => {
    console.log(searchQuery);
    this.setState({ loading: true });
    const res = await axios.get(
      'https://res.cloudinary.com/dpcb7n9lx/raw/upload/v1584549606/codebeautify_jk8jnl.json',
    );
    const tweets = [];
    res.data.map(item => {
      if (item.text.search(searchQuery) > -1) {
        tweets.push(item);
      }
    });
    this.setState({ tweets: res.data, loading: false });
    console.log(tweets);
  };
  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search searchTweets={this.searchTweets} />
          <Tweets loading={this.state.loading} tweets={this.state.tweets} />
        </div>
      </div>
    );
  }
}

export default App;
