import React from 'react'
import VideoItem from "./VideoItem"
const VideoList = ( { videos, onVideoSelect } ) => {
    if ( !videos.length ) {
        return <div style={ { textAlign: "center" } }>Loading...</div>
    }
    const renderedList = videos.map( ( video ) => {
        return <VideoItem video={ video } onVideoSelect={ onVideoSelect } key={ video.id.videoId } />
    } )
    return (
        <div className="ui segment relaxed divided list">
            { renderedList }
        </div>
    )
}

export default VideoList
