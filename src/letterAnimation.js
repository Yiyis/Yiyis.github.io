import React from "react";

class LetterAnimation extends React.Component {
  constructor(props) {
    super(props);
  }
  handleEnter=(event)=>{
    if(event.target.classList.contains('rubberBand')){
          event.target.classList.remove('rubberBand');
        } else {
          event.target.classList.add('rubberBand');
        }
  }

  render() {
    return (

          <div
            className="square"
            id={this.props.id}
            onMouseEnter={this.handleEnter}
          >
            {this.props.letter}
          </div>
        );
      }
    }


export default LetterAnimation;
