import React from 'react';

const VideoItem = ({video}) => {
  const imageUrl = video.snippet.thumbnails.url;

  return (
    <li className='list-group-item'>
      <div className='media-list media'>
        <div className='media-left'>
          <img className='media-object' src={imageUrl} />
        </div>
        <div className='media-body'>
          <div className='media-heading'>
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  );
}

export default VideoItem;
