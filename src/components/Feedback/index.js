// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isClicked: true}

  onChange = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  display = () => {
    const {isClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    if (isClicked === true) {
      return (
        <div className="feedbackcontainer">
          <h1 className="heading">
            How satisfied are you with our customer support perfomance?
          </h1>
          <div className="emojiscontainer">
            <div className="emojicontainer">
              <button type="button" id="label" onClick={this.onChange}>
                <img src={emojis[0].imageUrl} alt="Sad" className="image" />
              </button>
              <label htmlFor="labell" className="emojipara">
                {emojis[0].name}
              </label>
            </div>
            <div className="emojicontainer">
              <button type="button" id="label" onClick={this.onChange}>
                <img src={emojis[1].imageUrl} alt="None" className="image" />
              </button>
              <label htmlFor="labell" className="emojipara">
                {emojis[1].name}
              </label>
            </div>
            <div className="emojicontainer">
              <button type="button" id="label" onClick={this.onChange}>
                <img src={emojis[2].imageUrl} alt="Happy" className="image" />
              </button>
              <label htmlFor="labell" className="emojipara">
                {emojis[2].name}
              </label>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="thankyoucontainer">
        <img src={loveEmojiUrl} className="love" />
        <p className="para1">Thank You!</p>
        <p className="para2">
          We will use your feedback to improve our customer support perfomance
        </p>
      </div>
    )
  }

  render() {
    const {isClicked} = this.state

    return <div className="maincontainer">{this.display()}</div>
  }
}

export default Feedback
