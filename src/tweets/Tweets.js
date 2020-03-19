import React from 'react';
import TweetItem from './TweetItem';
import Spinner from '../components/layout/Spinner';

const Tweets = ({ tweets, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={tweetStyle}>
        {tweets.map(tweet => (
          <TweetItem key={tweet.id} tweet={tweet} />
        ))}
      </div>
    );
  }
};

const tweetStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridGap: '1rem',
};

export default Tweets;
