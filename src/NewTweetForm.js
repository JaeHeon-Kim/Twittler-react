import React from "react"

class NewTweetForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newTweetContents: ""
    }
    this.handleTweetContents = this.handleTweetContents.bind(this)
    this.onClickSubmit = this.onClickSubmit.bind(this)
    this.cleanTextArea = this.cleanTextArea.bind(this)
  }

  handleTweetContents(e) {
      this.setState({
          newTweetContent: e.target.value
      })
  }

  onClickSubmit() {
      this.props.handleButtonClick({
        uuid: this.state.newTweetContent,
        writer: "김재헌",
        date: new Date().toISOString().substring(0, 10),
        content: this.state.newTweetContent
      })
      this.cleanTextArea()
  }

  cleanTextArea() {
    document.querySelector(".textarea").value = ''
  }

  render() {
    return (
        <div>
            <textarea className="textarea" onChange={this.handleTweetContents}></textarea>
            <button className="newTweetBtn" onClick={this.onClickSubmit}>새 글 쓰기</button>
        </div>
    )
  }
}

export default NewTweetForm;