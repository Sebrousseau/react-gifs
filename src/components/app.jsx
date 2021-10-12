import React, { Component } from 'react'
import giphyApi, { Giphy } from 'giphy-api'
import SearchBar from './search_bar'
import Gif from './gif'
import GifList from './gif_list'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      gifs: [],
      selectedGifId: "xT9IgDEI1iZyb2wqo8"
    }
    this.selectGif = this.selectGif.bind(this)
  }

  search = (query) => {
    giphyApi('BcLK0ysccFKyeUHkPECzCHq3bJM1MiwT').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, result) => {
      this.setState({
        gifs: result.data
      })
    });
  }

  selectGif(id){
    this.setState({
      selectedGifId: id
    })
  }

  render() {
    return (
    <div>
      <div className="left-scene">
        <div className="form-control form-search">
          < SearchBar searchFunction={this.search}/>
        </div>
        <div className="selected-gif">
            < Gif id={this.state.selectedGifId}/>
        </div>
      </div>
      <div className="right-scene">
        <div className="gif-list">
            < GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    </div>
    )
  }
}

export default App
