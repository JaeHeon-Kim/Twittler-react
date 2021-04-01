import './App.css';
import React from 'react';
import SingleTweet from './SingleTweet'
import NewTweetForm from './NewTweetForm'

class Twittler extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: [
        {
          uuid: 1,
          writer: "김코딩",
          date: "2020-10-10",
          content: "안녕 리액트"
        },
        {
          uuid: 2,
          writer: "박해커",
          date: "2020-10-12",
          content: "좋아 코드스테이츠!"
        }
      ]
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick(Newtweet, e) {
    console.log(Newtweet)
    this.setState((prevState) => {
      return {tweets: [...prevState.tweets, Newtweet]}
    })
  }


  render() {
    return (
      <div>
        <div className="writer">작성자: 김재헌</div>
        <NewTweetForm handleButtonClick={this.handleButtonClick}/>
        <ul>
          {
            this.state.tweets.map(tweet => (
              <SingleTweet
              key={tweet.uuid}
              writer={tweet.writer} 
              date={tweet.date}
              content={tweet.content}
              />
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Twittler;
