import React, { Component } from "react";

const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li  className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img onClick={() => onVideoSelect(video)} className="media-object" src={imageUrl}/>
                </div>

                <div className="media-body">
                    <div onClick={() => onVideoSelect(video)} className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;