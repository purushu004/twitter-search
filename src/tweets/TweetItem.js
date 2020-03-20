import React from 'react';

const TweetItem = ({
  tweet: { text },
  screen_name,
  profile_image_url_https,
  name,
  retweeted_status,
  quoted_status,
}) => {
  return (
    <div className='card'>
      <div className='retweet'>
        {retweeted_status === undefined ? (
          ''
        ) : (
          <div>
            <span>
              <i className='fab fa-retweet'></i>
              {retweeted_status.user.name} Retweeted
            </span>
            <div className='retweet-card'>
              <div className='avatar'>
                <img
                  src={retweeted_status.user.profile_image_url_https}
                  alt=' avatar images'
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
                <h4>{retweeted_status.user.name}</h4>
                <span>@{retweeted_status.user.screen_name}</span>
                <p>{retweeted_status.text}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className='tweets-card'>
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
            src={
              quoted_status !== undefined
                ? quoted_status.entities.media !== undefined
                  ? quoted_status.entities.media.map(
                      item => item.media_url_https,
                    )
                  : ''
                : ''
            }
            alt='tweet-image'
            style={{ width: '500px', borderRadius: '15px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default TweetItem;
