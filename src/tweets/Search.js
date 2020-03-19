import React, { Component } from 'react';

class Search extends Component {
  state = {
    text: '',
    tweets: [],
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchTweets(this.state.text);
    this.setState({ text: '' });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Tweets...'
            value={this.state.text}
            onChange={this.onChange}
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
