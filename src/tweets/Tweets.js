import React from 'react';
import TweetItem from './TweetItem';
import Spinner from '../components/layout/Spinner';

const Tweets = ({ tweets, loading, loadMore, visible }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={tweetStyle}>
        {tweets.length === 0 ? (
          <p>No results found</p>
        ) : (
          tweets
            .slice(0, visible)
            .map(tweet => (
              <TweetItem
                key={tweet.id}
                tweet={tweet}
                screen_name={tweet.user.screen_name}
                profile_image_url_https={tweet.user.profile_image_url_https}
                name={tweet.user.name}
                retweeted_status={tweet.retweeted_status}
                quoted_status={tweet.quoted_status}
              />
            ))
        )}
      </div>
    );
  }
};

const tweetStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr',
};

export default Tweets;
