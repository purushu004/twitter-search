import React from 'react';

const TweetItem = ({
  tweet: { name, avatar_url, media_url_https, screen_name, text },
}) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt='avatar image'
        className='round-img'
        style={{ width: '50px' }}
      />
      <h3>{name}</h3>
      <span>@{screen_name}</span>
      <p>{text}</p>
      <img
        src={media_url_https}
        style={{ width: '500px', borderRadius: '15px' }}
      />
    </div>
  );
};

export default TweetItem;
