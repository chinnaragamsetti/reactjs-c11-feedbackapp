// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isClicked: true}

  onChange = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    let display
    if (isClicked) {
      display = (
        <div className="feedbackcontainer">
          <h1 className="heading">
            How satisfied are you with our customer support perfomance?
          </h1>
          <div className="emojiscontainer">
            <div className="emojicontainer">
              <button type="button" id="label" onClick={this.onChange}>
                <img src={emojis[0].imageUrl} className="image" />
              </button>
              <label htmlFor="labell" className="emojipara">
                {emojis[0].name}
              </label>
            </div>
            <div className="emojicontainer">
              <button type="button" id="label" onClick={this.onChange}>
                <img src={emojis[1].imageUrl} className="image" />
              </button>
              <label htmlFor="labell" className="emojipara">
                {emojis[1].name}
              </label>
            </div>
            <div className="emojicontainer">
              <button type="button" id="label" onClick={this.onChange}>
                <img src={emojis[2].imageUrl} className="image" />
              </button>
              <label htmlFor="labell" className="emojipara">
                {emojis[2].name}
              </label>
            </div>
          </div>
        </div>
      )
    }
    display = (
      <div className="thankyoucontainer">
        <img src={loveEmojiUrl} className="love" />
        <p className="para1">Thank You!</p>
        <p className="para2">
          We will use your feedback to improve our customer support perfomance
        </p>
      </div>
    )

    return <div className="maincontainer">{display}</div>
  }
}

export default Feedback
