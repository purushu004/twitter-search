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
    searchTweets: [],
    loading: false,
    isSearch: false,
    loadMore: false,
    visible: 10,
    showLoadButton: true,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const tweets = JSON.parse(localStorage.getItem('tweets'));
    if (tweets === undefined) {
      const tweets = [];
      const res = await axios.get(
        'https://res.cloudinary.com/dpcb7n9lx/raw/upload/v1584549606/codebeautify_jk8jnl.json',
      );
      tweets.conact(localStorage.setItem('tweets', JSON.stringify(res)));
    }
    this.setState({ tweets: tweets.data, loading: false });
  }

  showLoadMoreButton = () => {
    this.setState({ visible: this.state.visible + 10 });
  };

  //Search tweets
  searchTweets = (searchQuery, searchedTweets) => {
    this.setState({
      loading: false,
      searchTweets: searchedTweets,
      isSearch: true,
    });
    this.showLoadMoreButton();
  };

  render() {
    const showLoadButton = this.state.isSearch
      ? this.state.visible < this.state.searchTweets.length
      : this.state.visible < this.state.tweets.length;

    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search searchTweets={this.searchTweets} tweets={this.state.tweets} />
          <Tweets
            loading={this.state.loading}
            tweets={
              this.state.isSearch ? this.state.searchTweets : this.state.tweets
            }
            visible={this.state.visible}
          />
          {showLoadButton ? (
            <button
              onClick={this.showLoadMoreButton}
              type='button'
              className='load-more'
            >
              Load more
            </button>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}

export default App;
