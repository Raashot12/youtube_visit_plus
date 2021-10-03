import React, { Component } from 'react'
import SearchBar from './components/SearchBar'
import youtube from './apis/youtube'
import VideoList from './components/VideoList'
import VideoDetails from './components/VideoDetails'
import "./components/VideoItems.css"
import Navbar from './components/Navbar'
import { Container } from '@material-ui/core'
import Footer from './components/Footer'
export default class App extends Component {
    state = { videos: [], selectedVideo: null }


    componentDidMount() {
        this.onTermSubmit( 'buildings' )
    }

    onTermSubmit = async ( term ) => {
        const { data } = await youtube.get( "/search", {
            params: {
                q: term
            }
        } )
        this.setState( {
            videos: data.items,
            selectedVideo: data.items[0]
        } )
    }
    onVideoSelect = ( video ) => {
        this.setState( { selectedVideo: video } )
    }
    render() {
        return (
            <div style={ { position: "relative", minHeight: "100vh" } }>
                <Navbar />
                <Container>
                    <SearchBar onTermSubmit={ this.onTermSubmit } />
                    <div className="ui-row">
                        <div className="item-one">
                            <VideoDetails video={ this.state.selectedVideo } />
                        </div>
                        <div className="item-two">
                            <VideoList videos={ this.state.videos } onVideoSelect={ this.onVideoSelect } />
                        </div>
                    </div>

                </Container>
                <Footer />
            </div>
        )
    }
}
