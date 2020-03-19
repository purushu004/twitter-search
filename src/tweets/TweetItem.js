import React from 'react';

const TweetItem = ({
  tweet: { media_url_https, text },
  screen_name,
  profile_image_url_https,
  name,
}) => {
  return (
    <div className='card'>
      <div className='avatar'>
        <img
          src={profile_image_url_https}
          alt='avatar image'
          className='round-img'
          style={{ width: '50px' }}
          onError={e => {
            e.target.onerror = null;
            e.target.src =
              'https://image.shutterstock.com/image-photo/valencia-spain-march-05-2017-260nw-601425683.jpg';
          }}
        />
      </div>
      <div className='tweet-info'>
        <h4>{name}</h4>
        <span>@{screen_name}</span>
        <p>{text}</p>
        <img
          src='https://pbs.twimg.com/media/CfcKo7UVAAAODNd.jpg'
          style={{ width: '500px', borderRadius: '15px' }}
        />
      </div>
    </div>
  );
};

export default TweetItem;
