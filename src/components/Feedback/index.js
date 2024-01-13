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
    const {id, name, imageUrl} = emojis
    if (isClicked === true) {
      return (
        <div className="feedbackcontainer">
          <h1 className="heading">
            How satisfied are you with our customer support performance
          </h1>
          <ul className="emojiscontainer">
            {resources.emojis.map(each => (
              <li key={each.id} className="emojicontainer">
                <button type="button" id="label" onClick={this.onChange}>
                  <img src={each.imageUrl} alt={each.name} className="image" />
                </button>
                <label htmlFor="labell" className="emojipara">
                  {each.name}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )
    }
    return (
      <div className="thankyoucontainer">
        <img src={loveEmojiUrl} alt="love emoji" className="love" />
        <h1 className="para1">Thank You</h1>
        <p className="para2">
          We will use your feedback to improve our customer support perfomance
        </p>
      </div>
    )
  }

  render() {
    return <div className="maincontainer">{this.display()}</div>
  }
}

export default Feedback
