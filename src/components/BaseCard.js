import React from 'react';
import '../css/Card.css';

class BaseCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };

    this.toggleSelect = this.toggleSelect.bind(this);
    this.openCard = this.openCard.bind(this);
    this.closeCard = this.closeCard.bind(this);
  }

  toggleSelect() {
    this.props.onSetBaseFood(this.props.name);
  }

  openCard() {
    this.setState(() => {
      return {
        opened: true
      };
    });
  }

  closeCard() {
    this.setState(() => {
      return {
        opened: false
      };
    });
  }

  render() {
    let card_img = null;
    let card_text = null;
    let card_price = null;
    let choice_accept = null;

    if (this.state.opened) {
      card_img = <div className='cardimg-wrapper'><img className="card-image" src={this.props.image} alt={this.props.name} /></div>;
      card_text = <p className="card-text">{this.props.text}</p>
      card_price = <p className="card-price">{this.props.price.toFixed(2)}€</p>
      choice_accept = (
        <button
          onClick={event => {
            this.closeCard();
            this.toggleSelect();
          }}
          className="btn-accept"
        >
          ✔ ORDER
        </button>
      );
    }

    return (
      <div
        className={`card ${this.state.opened ? "opened" : "closed"} ${this.props.selected ? "active" : ""}`}
        style={this.state.opened ? null : { backgroundImage: `linear-gradient(
                    rgba(20,20,20, .1),
                    rgba(20,20,20, .4)),
                    url(${this.props.image})` }}
      >
        <div
          onClick={this.closeCard}
          style={this.state.opened ? { display: "block" } : null}
          className="card-close"
        >
          x
        </div>
        <svg
          onClick={this.openCard}
          className="card-title circular"
          height="100%"
          width="100%"
        >
          <rect
            className="card-shape"
            fill={this.props.selected ? this.props.color : null}
            x="0"
            y="0"
            height="100%"
            width="100%"
          />
          <text
            textAnchor="middle"
            alignmentBaseline="central"
            x="50%"
            y="50%"
            className="card-name"
          >
            {this.props.name}
          </text>
        </svg>
        {card_img}
        {card_text}
        {card_price}
        <div className="choice-controls">
          {choice_accept}
        </div>
      </div>
    );
  }
}

export default BaseCard
