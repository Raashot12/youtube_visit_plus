import React from 'react'


const VideoDetails = ( { video } ) => {
    if ( !video ) {
        return <div style={ { textAlign: "center" } }> Loading...</div>
    }
    const videoSrc = `https://www.youtube.com/embed/${ video.id.videoId }`
    return (
        <div>
            <div className="ui segment">
                <div className="ui embed">
                    <iframe src={ videoSrc } title={ video.snippet.title }></iframe>
                </div>
                <h4 className="ui header"> { video.snippet.title }</h4>
                <p>{ video.snippet.description }</p>
            </div>

        </div>
    )
}

export default VideoDetails
