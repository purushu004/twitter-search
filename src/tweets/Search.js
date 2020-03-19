import React, { Component } from 'react';

class Search extends Component {
  state = {
    text: '',
    tweets: [],
  };

  onSubmit = e => {
    e.preventDefault();
    const searchTweet = this.props.tweets.filter(tweet =>
      tweet.text.includes(this.state.text),
    );
    this.props.searchTweets(this.state.text, searchTweet);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className='search-component'>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Twitter'
            value={this.state.text}
            onChange={this.onChange}
            className='search-bar'
          />
          <input
            type='submit'
            name='Search'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    );
  }
}

export default Search;
